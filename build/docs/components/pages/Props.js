// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import ReactMarkdown from "react-markdown";
import props from "../../guides/props.md";
import codeRenderer from "../CodeBlock";
import TableRenderer from "../TableRenderer";
const Props = () => (React.createElement("div", { className: "fip-props" },
    React.createElement(ReactMarkdown, { source: props, escapeHtml: true, renderers: {
            code: codeRenderer,
            table: TableRenderer
        } })));
export default Props;
//# sourceMappingURL=Props.js.map