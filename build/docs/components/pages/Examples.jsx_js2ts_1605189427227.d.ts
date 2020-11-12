import React from 'react';
declare class Examples extends React.PureComponent {
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
