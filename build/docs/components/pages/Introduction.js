// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import ReactMarkdown from "react-markdown"; // eslint-disable-line
import FontIconPicker from "../../../js/FontIconPicker";
import intro from "../../guides/introduction.md";
import * as iconDefs from "../../helpers/iconDefs";
import codeRenderer from "../CodeBlock";
class Introduction extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            vFontAwesome: ["fab fa-accessible-icon", "fas fa-rss"],
            vIcoMoon: 57571
        };
        this.handleFontAwesome = values => {
            this.setState({ vFontAwesome: values });
        };
        this.handleIcoMoon = value => {
            this.setState({ vIcoMoon: value });
        };
    }
    render() {
        return (React.createElement("div", { className: "fip-intro" },
            React.createElement("div", { className: "text-center" },
                React.createElement("svg", { className: "fonticonpicker-logo" },
                    React.createElement("use", { xlinkHref: "#fonticonpicker-logo", xmlnsXlink: "http://www.w3.org/1999/xlink" })),
                React.createElement("h2", { className: "fip-name" }, "React FontIconPicker"),
                React.createElement("p", { className: "badges" },
                    React.createElement("a", { href: "https://codecov.io/gh/fontIconPicker/react-fonticonpicker" },
                        React.createElement("img", { src: "https://codecov.io/gh/fontIconPicker/react-fonticonpicker/branch/master/graph/badge.svg", alt: "codecov" })),
                    " ",
                    React.createElement("a", { href: "https://travis-ci.org/fontIconPicker/react-fonticonpicker" },
                        React.createElement("img", { src: "https://travis-ci.org/fontIconPicker/react-fonticonpicker.svg?branch=master", alt: "Build Status" })),
                    " ",
                    React.createElement("a", { href: "https://github.com/facebook/jest" },
                        React.createElement("img", { src: "https://facebook.github.io/jest/img/jest-badge.svg", alt: "jest" })),
                    " ",
                    React.createElement("a", { href: "https://badge.fury.io/js/%40fonticonpicker%2Freact-fonticonpicker" },
                        React.createElement("img", { src: "https://badge.fury.io/js/%40fonticonpicker%2Freact-fonticonpicker.svg", alt: "npm version", height: "18" })),
                    " ",
                    React.createElement("a", { href: "https://david-dm.org/fontIconPicker/react-fonticonpicker?type=peer" },
                        React.createElement("img", { src: "https://david-dm.org/fontIconPicker/react-fonticonpicker/peer-status.svg", alt: "peerDependencies Status" })),
                    " ",
                    React.createElement("a", { href: "https://github.com/fontIconPicker/react-fonticonpicker/blob/master/LICENSE" },
                        React.createElement("img", { src: "https://img.shields.io/github/license/fontIconPicker/react-fonticonpicker.svg", alt: "GitHub license" }))),
                React.createElement("div", { className: "intro-fips" },
                    React.createElement(FontIconPicker, { onChange: this.handleFontAwesome, renderUsing: "class", icons: iconDefs.fontAwesome, value: this.state.vFontAwesome, theme: "bluegrey", isMulti: true }),
                    React.createElement(FontIconPicker, { onChange: this.handleIcoMoon, icons: iconDefs.icomoonIcons, search: iconDefs.icomoonIconsSearch, value: this.state.vIcoMoon, theme: "teal", isMulti: false, renderUsing: "data-icomoon" }))),
            React.createElement(ReactMarkdown, { source: intro, escapeHtml: true, renderers: {
                    code: codeRenderer
                } })));
    }
}
export default Introduction;
//# sourceMappingURL=Introduction.js.map