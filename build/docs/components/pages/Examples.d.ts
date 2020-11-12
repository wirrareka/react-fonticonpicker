import React from "react";
declare type ExamplesState = {
    map?: <U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any) => U[];
    value4?: number[];
    value3?: number;
    value2?: any[];
    value1?: number;
};
declare class Examples extends React.PureComponent<{}, ExamplesState> {
    state: {
        value1: number;
        value2: any[];
        value3: number;
        value4: number[];
    };
    handleChange: (key: any, value: any) => void;
    renderSVG: (svg: any) => JSX.Element;
    render(): JSX.Element;
}
export default Examples;
