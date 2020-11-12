// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
interface IFipCategoryProps extends React.HTMLAttributes<Element> {
  handleCategory: (...args: any[]) => any;
  value: number;
  categories: string[];
  map?: any;
}
class FipCategory extends React.PureComponent<IFipCategoryProps, {}> {
  render() {
    return (
      <div className="rfipcategory">
        <select
          className="rfipcategory__select"
          onChange={this.props.handleCategory}
          value={this.props.value}
        >
          {this.props.categories.map((value, index) => (
            <option
              className="rfipcategory__select__option"
              key={value}
              value={index}
            >
              {value}
            </option>
          ))}
        </select>
        <i
          className="fipicon-angle-down"
          role="presentation"
          aria-label="Open"
        />
      </div>
    );
  }
}
export default FipCategory;
