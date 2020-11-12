import React from "react";
interface IFipIconContainerProps extends React.HTMLAttributes<Element> {
    categories?: string[];
    currentCategory?: number;
    isMulti: boolean;
    icons: string[] | number[] | {
        [key: string]: number[] | string[];
    };
    search?: {
        [key: string]: string[];
    } | string[];
    value: number | string | (number | string)[];
    currentSearch: string;
    handleChangeValue: (...args: any[]) => any;
    currentPage: number;
    iconsPerPage: number;
    handleChangePage: (...args: any[]) => any;
    renderIcon: (...args: any[]) => any;
    noIconPlaceholder: string;
}
declare type FipIconContainerState = {
    viewPage?: any;
    totalPage?: any;
    titleView?: any;
    map?: any;
    iconView?: any;
};
declare class FipIconContainer extends React.PureComponent<IFipIconContainerProps, FipIconContainerState> {
    static defaultProps: {
        categories: any;
        currentCategory: any;
        search: any;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): FipIconContainerState;
    /**
     * Get the current set of icons, based on search
     *
     * @param {array} currentIconsSet icon set from where to filter
     * @returns {array} filtered list of icons to slice on
     */
    static getActiveIcons(currentIconsSet: any, currentSearchSet: any, searchString: any): {
        activeIcons: any[];
        activeTitles: any[];
    };
    /**
     * Get icons or search set based on selected category
     *
     * @param {number} currentCategory current categories
     * @param {string} key the props key to use
     * @returns {array} filtered and flattened source
     */
    static getCategoryFilteredState(currentCategory: any, categories: any, source: any): any[];
    /**
     * Get the set of icons to show on current page
     *
     * @param {array} iconSet Active icon set from where to slice
     * @param {number} iconsPerPage Number of icons per page
     * @param {number} currentPage current page (0 based)
     * @return {array} sliced list of icons to show on currentPage
     */
    static getCurrentViewIcons(iconSet: any, iconsPerPage: any, currentPage: any): any;
    constructor(props: any);
    handleChangePage: (event: any, force?: any) => void;
    handlePageKeyBoard: (event: any, force: any) => void;
    handleChangeValue: (value: any) => void;
    handleValueKeyboard: (event: any, value: any) => void;
    renderPager(): JSX.Element;
    renderIconView(): any;
    render(): JSX.Element;
}
export default FipIconContainer;
