import React from "react";
interface IFipDropDownProps extends React.HTMLAttributes<Element> {
    isMulti: boolean;
    value: number | string | any[];
    currentCategory: number;
    currentPage: number;
    currentSearch: string;
    icons: number[] | string[] | {
        [key: string]: number[] | string[];
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
declare type FipDropDownState = {
    categories?: any;
    searchString?: any;
};
declare class FipDropDown extends React.PureComponent<IFipDropDownProps, FipDropDownState> {
    static defaultProps: {
        search: any;
    };
    static getDerivedStateFromProps(nextProps: any): {
        categories: string[];
        searchString: any;
    };
    constructor(props: any);
    /**
     * Handle category change
     *
     * Sets internal state and also calls the parent app.
     */
    handleCategory: (event: any) => void;
    handleSearch: (event: any) => void;
    render(): JSX.Element;
}
export default FipDropDown;
