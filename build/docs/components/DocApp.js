// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import Routes from "./Routes";
import pkg from "../../../package.json";
const DocApp = () => (React.createElement(React.Fragment, null,
    React.createElement("header", { className: "site-title" },
        React.createElement("h1", null,
            React.createElement("svg", { className: "fonticonpicker-logo" },
                React.createElement("use", { xlinkHref: "#fonticonpicker-logo", xmlnsXlink: "http://www.w3.org/1999/xlink" })),
            React.createElement("span", { className: "title-text" },
                "fonticonpicker",
                React.createElement("sup", null,
                    "v",
                    pkg.version)),
            React.createElement("a", { className: "fip-github", href: "https://github.com/fontIconPicker/react-fonticonpicker" },
                React.createElement("i", { className: "fab fa-github-alt" })))),
    React.createElement(Routes, null),
    React.createElement("footer", { className: "site-footer" },
        React.createElement("p", { className: "copyright" },
            "\u00A9 ",
            React.createElement("a", { href: "https://swashata.me" }, "Swashata Ghosh"),
            " -",
            " ",
            new Date().getFullYear(),
            " -",
            " ",
            React.createElement("a", { href: "https://opensource.org/licenses/MIT" }, "MIT License")),
        React.createElement("p", { className: "social" },
            React.createElement("a", { className: "link github", href: "https://github.com/swashata" },
                React.createElement("i", { title: "GitHub", className: "fab fa-github" })),
            React.createElement("a", { className: "link twitter", href: "https://twitter.com/swashata" },
                React.createElement("i", { title: "Twitter", className: "fab fa-twitter" })),
            React.createElement("a", { className: "link blog", href: "https://swashata.me" },
                React.createElement("i", { title: "Blog", className: "fas fa-globe" })),
            React.createElement("a", { className: "link wpquark", href: "https://wpquark.com" },
                React.createElement("i", { title: "WPQuark", className: "fas fa-briefcase" }))))));
export default DocApp;
//# sourceMappingURL=DocApp.js.map