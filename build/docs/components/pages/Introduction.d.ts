import React from "react";
declare type IntroductionState = {
    vFontAwesome?: any;
    vIcoMoon?: any;
};
declare class Introduction extends React.Component<{}, IntroductionState> {
    state: {
        vFontAwesome: string[];
        vIcoMoon: number;
    };
    handleFontAwesome: (values: any) => void;
    handleIcoMoon: (value: any) => void;
    render(): JSX.Element;
}
export default Introduction;
