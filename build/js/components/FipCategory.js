// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
class FipCategory extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "rfipcategory" },
            React.createElement("select", { className: "rfipcategory__select", onChange: this.props.handleCategory, value: this.props.value }, this.props.categories.map((value, index) => (React.createElement("option", { className: "rfipcategory__select__option", key: value, value: index }, value)))),
            React.createElement("i", { className: "fipicon-angle-down", role: "presentation", "aria-label": "Open" })));
    }
}
export default FipCategory;
//# sourceMappingURL=FipCategory.js.map