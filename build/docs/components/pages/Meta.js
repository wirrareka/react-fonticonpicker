// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import ReactMarkdown from "react-markdown";
import meta from "../../guides/meta.md";
import codeRenderer from "../CodeBlock";
import TableRenderer from "../TableRenderer";
const Meta = () => (React.createElement("div", { className: "fip-meta" },
    React.createElement(ReactMarkdown, { source: meta, escapeHtml: true, renderers: {
            code: codeRenderer,
            table: TableRenderer
        } })));
export default Meta;
//# sourceMappingURL=Meta.js.map