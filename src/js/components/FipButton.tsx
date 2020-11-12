// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import classNames from "classnames";
interface IFipButtonProps extends React.HTMLAttributes<Element> {
  className: string;
  isOpen: boolean;
  onClick: (...args: any[]) => any;
  domRef: any;
  isMulti: boolean;
  value: number | string | (number | string)[];
  renderIcon: (...args: any[]) => any;
  handleDeleteValue: (...args: any[]) => any;
  noSelectedPlaceholder: string;
  map?: any;
}
class FipButton extends React.PureComponent<IFipButtonProps, {}> {
  handleClick = () => {
    this.props.onClick();
  };
  handleKeyDown = event => {
    // Toggle on enter or keyspace
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.props.onClick();
    }
  };
  handleDelete = (event: any, icon: any) => {
    event.stopPropagation();
    this.props.handleDeleteValue(icon);
  };
  handleDeleteKeyboard = (event, icon) => {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.props.handleDeleteValue(icon);
    }
  };
  handleFocus = (event: any, json: any) => {}
  handleBlur = (event: any, json: any) => {}

  renderIcon(icon) {
    if (icon === "" || icon === null || icon === undefined) {
      return this.renderEmptyIcon();
    }
    return (
      <span className="rfipbtn__icon" key={icon}>
        <span className="rfipbtn__elm">{this.props.renderIcon(icon)}</span>
        <span
          className="rfipbtn__del"
          onClick={e => this.handleDelete(e, icon)}
          onKeyDown={e => this.handleDeleteKeyboard(e, icon)}
          tabIndex={0}
          role="button"
        >
          &times;
        </span>
      </span>
    );
  }
  renderEmptyIcon = () => (
    <span className="rfipbtn__icon--empty">
      {this.props.noSelectedPlaceholder}
    </span>
  );
  renderCurrentIcons() {
    if (this.props.isMulti) {
      if (!(this.props.value as string).length) {
        return this.renderEmptyIcon();
      }
      return (this.props.value as any[]).map(icon => this.renderIcon(icon));
    }
    return this.renderIcon(this.props.value);
  }
  render() {
    const handlers = {
      onClick: this.handleClick as any,
      onKeyDown: this.handleKeyDown as any,
      onFocus: this.handleFocus as any,
      onBlur: this.handleBlur as any,
      tabIndex: 0
    };
    const btnClass = classNames(
      "rfipbtn__button",
      `rfipbtn__button--${this.props.isOpen ? "open" : "close"}`
    );
    const elmClass = classNames(this.props.className);
    return (
      <div className={elmClass} ref={this.props.domRef} {...handlers}>
        <div className="rfipbtn__current">{this.renderCurrentIcons()}</div>
        <div className={btnClass}>
          <i
            className="fipicon-angle-down"
            role="presentation"
            aria-label="Open"
          />
        </div>
      </div>
    );
  }
}
export default FipButton;
