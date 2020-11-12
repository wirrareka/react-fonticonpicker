import React from "react";
interface IFipDropDownPortalProps extends React.HTMLAttributes<Element> {
    appendRoot?: boolean | string;
    domRef: any;
    btnRef: any;
    className: string;
    offsetWidth?: any;
    current?: any;
    offsetHeight?: any;
    display?: any;
    style?: any;
    top?: any;
    left?: any;
}
declare type FipDropDownPortalState = {
    appendRoot?: any;
    portalClasses?: any;
};
declare class FipDropDownPortal extends React.PureComponent<IFipDropDownPortalProps, FipDropDownPortalState> {
    debouncedSyncPortalPosition: any;
    static defaultProps: {
        appendRoot: boolean;
    };
    static getDerivedStateFromProps(nextProps: any): {
        appendRoot: string;
        portalClasses: any;
    };
    /**
     * Calculate append Node and Portal classes based on appendRoot settings
     *
     * @param {string} appendRoot self or a querySelector valid string
     * @return {object} Object with portalClasses and appendRoot
     */
    static calculateAppendAndClass(appendRoot: any): {
        portalClasses: any;
        appendRoot: string;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    syncPortalPosition: () => void;
    positionPortal(): void;
    resetPortalPosition(): void;
    fixWindowOverflow: () => void;
    render(): JSX.Element;
}
export default FipDropDownPortal;
