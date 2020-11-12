// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import ReactMarkdown from "react-markdown";
import installation from "../../guides/installation.md";
import codeRenderer from "../CodeBlock";
import pkg from "../../../../package.json";
const Installation = () => (React.createElement("div", { className: "fip-install" },
    React.createElement(ReactMarkdown, { source: installation, escapeHtml: true, renderers: {
            code: codeRenderer
        } }),
    React.createElement("h3", null, "peerDependencies"),
    React.createElement("p", null, "FontIconPicker has the following dependencies."),
    React.createElement("div", { className: "list-group" }, Object.keys(pkg.peerDependencies).map(dep => (React.createElement("a", { key: dep, href: `https://www.npmjs.com/package/${dep}`, className: "list-group-item d-flex justify-content-between align-items-center" },
        React.createElement("code", null, dep),
        React.createElement("span", { className: "badge badge-primary badge-pill" }, pkg.peerDependencies[dep])))))));
export default Installation;
//# sourceMappingURL=Installation.js.map