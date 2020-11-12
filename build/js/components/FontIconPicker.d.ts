import React from "react";
interface IFontIconPickerProps extends React.HTMLAttributes<Element> {
    icons: string[] | number[] | {
        [key: string]: number[] | string[];
    };
    search?: {
        [key: string]: string[];
    } | string[];
    iconsPerPage?: number;
    theme?: string;
    onChange: (...args: any[]) => any;
    showCategory?: boolean;
    showSearch?: boolean;
    value?: string[] | number[] | number | string;
    isMulti?: boolean;
    renderUsing?: string;
    convertHex?: boolean;
    renderFunc?: (...args: any[]) => any;
    appendTo?: boolean | string;
    allCatPlaceholder?: string;
    searchPlaceholder?: string;
    noIconPlaceholder?: string;
    noSelectedPlaceholder?: string;
    closeOnSelect?: boolean;
}
declare type FontIconPickerState = {
    currentCategory?: number;
    currentPage?: number;
    isOpen?: boolean;
    currentSearch?: string;
    value?: any;
    filter?: any;
    ddClass?: any;
    btnClass?: any;
    elemClass?: any;
};
declare class FontIconPicker extends React.Component<IFontIconPickerProps, FontIconPickerState> {
    fipButtonRef: any;
    fipDropDownRef: any;
    fipPortalComputedStyle: any;
    fipRef: any;
    static defaultProps: {
        search: any;
        iconsPerPage: number;
        theme: string;
        showCategory: boolean;
        showSearch: boolean;
        value: any;
        isMulti: boolean;
        renderUsing: string;
        convertHex: boolean;
        renderFunc: any;
        appendTo: boolean;
        allCatPlaceholder: string;
        searchPlaceholder: string;
        noIconPlaceholder: string;
        noSelectedPlaceholder: string;
        closeOnSelect: boolean;
    };
    static displayName: string;
    static getDerivedStateFromProps(nextProps: any, prevState: any): FontIconPickerState;
    /**
     * Get dervied (BEM) classname for provided theme
     *
     * @param {string} base the base className
     * @param {string} theme Name of the theme
     * @param {boolean} isMulti Whether or not multiple
     * @param {boolean} isOpen Whether or not dropdown is open
     * @return {string} Calculated theme
     */
    static getDerivedClassName(base: any, theme: any, isMulti: any, isOpen: any): any;
    static getDerivedValue(value: any, isMulti: any): any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Handle the outer click event
     * It checks if event came from outside
     * If so, then close the dropdown
     */
    handleOuterClick: (event: any) => void;
    handleEscapeKeyboard: (event: any) => void;
    isClickWithin: (target: any) => any;
    /**
     * Handle the dropdown open thingy.
     *
     * Toggle the state isOpen and rest is done by React.
     */
    handleToggle: () => void;
    /**
     * Close the dropdown by setting the state
     */
    closeDropdown: () => void;
    handleDropDown: (isOpen: any, set?: boolean) => FontIconPickerState;
    /**
     * Handle change value
     * Set the internal state
     * and call the props
     */
    handleChangeValue: (value: any) => void;
    handleDeleteValue: (value: any) => void;
    /**
     * Handle page change for dropdown
     *
     * We save it in the state for the root component
     * because we would restore the DOM to the previous position when
     * being reopened.
     */
    handleChangePage: (newPage: any) => void;
    /**
     * Handle change category from the child component
     * The reason we do this because, we would like preserve
     */
    handleChangeCategory: (newCategory: any) => void;
    /**
     * Handle change search string
     */
    handleChangeSearch: (newSearch: any) => void;
    /**
     * Reset portal styles to normal
     */
    resetPortalStyle: (selectorNode: any) => void;
    handlePortalEnter: (node: any) => void;
    handlePortalEntering: (node: any) => void;
    handlePortalEntered: (node: any) => void;
    handlePortalExit: (node: any) => void;
    handlePortalExiting: (node: any) => void;
    renderIcon: (icon: any) => any;
    render(): JSX.Element;
}
export default FontIconPicker;
