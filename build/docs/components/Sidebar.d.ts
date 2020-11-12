import React from "react";
declare type SidebarState = {
    isOpen?: boolean;
};
declare class Sidebar extends React.Component<{}, SidebarState> {
    state: {
        isOpen: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    btnRef: React.RefObject<HTMLDivElement>;
    handleOuterClick: (e: any) => void;
    handleToggle: (e: any) => void;
    render(): JSX.Element;
}
export default Sidebar;
