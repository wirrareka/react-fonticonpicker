import React from "react";
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
declare class FipButton extends React.PureComponent<IFipButtonProps, {}> {
    handleClick: () => void;
    handleKeyDown: (event: any) => void;
    handleDelete: (event: any, icon: any) => void;
    handleDeleteKeyboard: (event: any, icon: any) => void;
    handleFocus: (event: any, json: any) => void;
    handleBlur: (event: any, json: any) => void;
    renderIcon(icon: any): JSX.Element;
    renderEmptyIcon: () => JSX.Element;
    renderCurrentIcons(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export default FipButton;
