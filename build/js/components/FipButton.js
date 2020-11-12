// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import classNames from "classnames";
class FipButton extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            this.props.onClick();
        };
        this.handleKeyDown = event => {
            // Toggle on enter or keyspace
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.props.onClick();
            }
        };
        this.handleDelete = (event, icon) => {
            event.stopPropagation();
            this.props.handleDeleteValue(icon);
        };
        this.handleDeleteKeyboard = (event, icon) => {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.props.handleDeleteValue(icon);
            }
        };
        this.handleFocus = (event, json) => { };
        this.handleBlur = (event, json) => { };
        this.renderEmptyIcon = () => (React.createElement("span", { className: "rfipbtn__icon--empty" }, this.props.noSelectedPlaceholder));
    }
    renderIcon(icon) {
        if (icon === "" || icon === null || icon === undefined) {
            return this.renderEmptyIcon();
        }
        return (React.createElement("span", { className: "rfipbtn__icon", key: icon },
            React.createElement("span", { className: "rfipbtn__elm" }, this.props.renderIcon(icon)),
            React.createElement("span", { className: "rfipbtn__del", onClick: e => this.handleDelete(e, icon), onKeyDown: e => this.handleDeleteKeyboard(e, icon), tabIndex: 0, role: "button" }, "\u00D7")));
    }
    renderCurrentIcons() {
        if (this.props.isMulti) {
            if (!this.props.value.length) {
                return this.renderEmptyIcon();
            }
            return this.props.value.map(icon => this.renderIcon(icon));
        }
        return this.renderIcon(this.props.value);
    }
    render() {
        const handlers = {
            onClick: this.handleClick,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            tabIndex: 0
        };
        const btnClass = classNames("rfipbtn__button", `rfipbtn__button--${this.props.isOpen ? "open" : "close"}`);
        const elmClass = classNames(this.props.className);
        return (React.createElement("div", Object.assign({ className: elmClass, ref: this.props.domRef }, handlers),
            React.createElement("div", { className: "rfipbtn__current" }, this.renderCurrentIcons()),
            React.createElement("div", { className: btnClass },
                React.createElement("i", { className: "fipicon-angle-down", role: "presentation", "aria-label": "Open" }))));
    }
}
export default FipButton;
//# sourceMappingURL=FipButton.js.map