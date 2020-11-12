// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import FipCategory from "./FipCategory";
import FipSearch from "./FipSearch";
import FipIconContainer from "./FipIconContainer";
import { getPossibleCategories } from "../helpers/iconHelpers";
class FipDropDown extends React.PureComponent {
    constructor(props) {
        super(props);
        /**
         * Handle category change
         *
         * Sets internal state and also calls the parent app.
         */
        this.handleCategory = event => {
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
        this.handleSearch = event => {
            const currentSearch = event.target.value;
            // Change the state of the parent
            this.props.handleChangeSearch(currentSearch);
        };
        this.state = {};
    }
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
    render() {
        return (React.createElement("div", { className: "rfipdropdown__selector" },
            this.props.showSearch ? (React.createElement(FipSearch, { handleSearch: this.handleSearch, value: this.state.searchString, placeholder: this.props.searchPlaceholder })) : null,
            this.props.showCategory &&
                this.state.categories &&
                this.state.categories.length ? (React.createElement(FipCategory, { handleCategory: this.handleCategory, value: this.props.currentCategory, categories: this.state.categories })) : null,
            React.createElement(FipIconContainer, { categories: this.state.categories, currentCategory: this.props.currentCategory, isMulti: this.props.isMulti, icons: this.props.icons, search: this.props.search, value: this.props.value, currentSearch: this.props.currentSearch, handleChangeValue: this.props.handleChangeValue, currentPage: this.props.currentPage, iconsPerPage: this.props.iconsPerPage, handleChangePage: this.props.handleChangePage, renderIcon: this.props.renderIcon, noIconPlaceholder: this.props.noIconPlaceholder })));
    }
}
FipDropDown.defaultProps = {
    search: null
};
export default FipDropDown;
//# sourceMappingURL=FipDropDown.js.map