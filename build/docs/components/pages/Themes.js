// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import CodeBlock from "../CodeBlock";
import FontIconPicker from "../../../js/FontIconPicker";
import * as iconDefs from "../../helpers/iconDefs";
const Themes = () => (React.createElement("div", null,
    React.createElement("h2", null,
        React.createElement("code", null, "FontIconPicker"),
        " Themes"),
    React.createElement("p", null,
        "Below are 14 prebuilt themes packed with ",
        React.createElement("code", null, "FontIconPicker"),
        "."),
    React.createElement("p", null, "To use them, import the styles from your script."),
    React.createElement(CodeBlock, { language: "js", value: `import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';` }),
    React.createElement("p", null,
        "Now initiatie ",
        React.createElement("code", null, "FontIconPicker"),
        " with the ",
        React.createElement("code", null, "theme"),
        " ",
        "props."),
    React.createElement(CodeBlock, { language: "js", value: `<FontIconPicker
	icons={iconDefs.superHeroIcons}
	search={iconDefs.superHeroSearch}
	value={[]}
	onChange={v => v}
	isMulti
	theme="bluegrey"
/>` }),
    React.createElement("ul", { className: "list-group" }, [
        "bluegrey",
        "blue",
        "brown",
        "cyan",
        "deeporange",
        "deeppurple",
        "default",
        "indigo",
        "lightblue",
        "orange",
        "pink",
        "purple",
        "red",
        "teal"
    ].map(theme => (React.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center", key: theme },
        React.createElement(FontIconPicker, { icons: iconDefs.superHeroIcons, search: iconDefs.superHeroSearch, value: [], onChange: v => v, isMulti: true, theme: theme, noSelectedPlaceholder: `${theme} theme` }),
        React.createElement("span", { className: "badge badge-light badge-pill" },
            React.createElement("code", null, theme))))))));
export default Themes;
//# sourceMappingURL=Themes.js.map