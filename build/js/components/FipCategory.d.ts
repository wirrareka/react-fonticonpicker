import React from "react";
interface IFipCategoryProps extends React.HTMLAttributes<Element> {
    handleCategory: (...args: any[]) => any;
    value: number;
    categories: string[];
    map?: any;
}
declare class FipCategory extends React.PureComponent<IFipCategoryProps, {}> {
    render(): JSX.Element;
}
export default FipCategory;
