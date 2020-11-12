// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import FipCategory from "./FipCategory";
import FipSearch from "./FipSearch";
import FipIconContainer from "./FipIconContainer";
import { getPossibleCategories } from "../helpers/iconHelpers";
interface IFipDropDownProps extends React.HTMLAttributes<Element> {
  isMulti: boolean;
  value: number | string | any[];
  currentCategory: number;
  currentPage: number;
  currentSearch: string;
  icons:
    | number[]
    | string[]
    | {
        [key: string]: number[] | string[]
      };
  search?: any | string[];
  showCategory: boolean;
  showSearch: boolean;
  iconsPerPage: number;
  allCatPlaceholder: string;
  searchPlaceholder: string;
  noIconPlaceholder: string;
  renderIcon: (...args: any[]) => any;
  handleChangeValue: (...args: any[]) => any;
  handleChangeCategory: (...args: any[]) => any;
  handleChangePage: (...args: any[]) => any;
  handleChangeSearch: (...args: any[]) => any;
}
type FipDropDownState = {
  categories?: any,
  searchString?: any
};
class FipDropDown extends React.PureComponent<
  IFipDropDownProps,
  FipDropDownState
> {
  static defaultProps = {
    search: null
  };
  static getDerivedStateFromProps(nextProps) {
    // Get categories and flattened source
    let categories = getPossibleCategories(nextProps.icons);
    if (categories !== null) {
      categories = [nextProps.allCatPlaceholder, ...categories];
    }
    // assign to the state
    // rest is handled by props
    return { categories, searchString: nextProps.currentSearch };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * Handle category change
   *
   * Sets internal state and also calls the parent app.
   */
  handleCategory = event => {
    // Get the category
    let currentCategory = parseInt(event.target.value, 10);
    if (Number.isNaN(currentCategory)) {
      currentCategory = 0;
    }
    // call the external handler
    this.props.handleChangeCategory(currentCategory);
    // Also change the pagenumber to 0
    this.props.handleChangePage(0);
  };
  handleSearch = event => {
    const currentSearch = event.target.value;
    // Change the state of the parent
    this.props.handleChangeSearch(currentSearch);
  };
  render() {
    return (
      <div className="rfipdropdown__selector">
        {this.props.showSearch ? (
          <FipSearch
            handleSearch={this.handleSearch}
            value={this.state.searchString}
            placeholder={this.props.searchPlaceholder}
          />
        ) : null}

        {this.props.showCategory &&
        this.state.categories &&
        this.state.categories.length ? (
          <FipCategory
            handleCategory={this.handleCategory}
            value={this.props.currentCategory}
            categories={this.state.categories}
          />
        ) : null}

        <FipIconContainer
          categories={this.state.categories}
          currentCategory={this.props.currentCategory}
          isMulti={this.props.isMulti}
          icons={this.props.icons}
          search={this.props.search}
          value={this.props.value}
          currentSearch={this.props.currentSearch}
          handleChangeValue={this.props.handleChangeValue}
          currentPage={this.props.currentPage}
          iconsPerPage={this.props.iconsPerPage}
          handleChangePage={this.props.handleChangePage}
          renderIcon={this.props.renderIcon}
          noIconPlaceholder={this.props.noIconPlaceholder}
        />
      </div>
    );
  }
}
export default FipDropDown;
