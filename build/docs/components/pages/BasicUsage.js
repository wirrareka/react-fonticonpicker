// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import ReactMarkdown from "react-markdown";
import { Route, NavLink } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import FontIconPicker from "../../../js/FontIconPicker";
import * as iconDefs from "../../helpers/iconDefs";
import basicusage from "../../guides/basicusage.md";
import fipncp from "../../guides/usage-parts/1-fipncp.md";
import fipcp from "../../guides/usage-parts/2-fipcp.md";
import fipsmp from "../../guides/usage-parts/3-fipsmp.md";
import fipar from "../../guides/usage-parts/4-fipar.md";
import fipcr from "../../guides/usage-parts/5-fipcr.md";
import codeRenderer from "../CodeBlock";
import { fadeInUp } from "../../helpers/routeTransition";
const noop = () => { };
const FipNoCategory = () => (React.createElement("div", { className: "text-center" },
    React.createElement("strong", null, "Output: "),
    React.createElement(FontIconPicker, { icons: iconDefs.fontAwesome.Vehicles, onChange: noop, value: "fas fa-truck", isMulti: false })));
const FipCategory = () => (React.createElement("div", { className: "text-center" },
    React.createElement("strong", null, "Output: "),
    React.createElement(FontIconPicker, { icons: iconDefs.fontAwesome, onChange: noop, value: ["fas fa-truck", "fas fa-subway"], isMulti: true })));
const FipPickers = () => (React.createElement("div", { className: "text-center" },
    React.createElement("strong", null, "Output: "),
    React.createElement(FontIconPicker, { icons: iconDefs.fontAwesome, onChange: noop, value: "fas fa-subway", isMulti: false }),
    React.createElement(FontIconPicker, { icons: iconDefs.fontAwesome, onChange: noop, value: ["fas fa-truck", "fas fa-subway"], isMulti: true })));
const FipAttribute = () => (React.createElement("div", { className: "text-center" },
    React.createElement("strong", null, "Output: "),
    React.createElement(FontIconPicker, { icons: iconDefs.icomoonIcons["Web Applications"], search: iconDefs.icomoonIconsSearch["Web Applications"], onChange: noop, value: [57436, 57437], renderUsing: "data-icomoon", isMulti: true })));
const renderSVG = svg => (React.createElement("svg", null,
    React.createElement("use", { xlinkHref: `#${svg}` })));
const FipCustom = () => (React.createElement("div", { className: "text-center" },
    React.createElement("strong", null, "Output: "),
    React.createElement(FontIconPicker, { icons: iconDefs.svgs, onChange: noop, value: ["004-green_lantern", "066-daredevil_glasses"], renderFunc: renderSVG, theme: "indigo", isMulti: true })));
const FipNCP = () => (React.createElement("div", { className: "fip-usage-ncp" },
    React.createElement(FipNoCategory, null),
    React.createElement(ReactMarkdown, { source: fipncp, escapeHtml: true, renderers: {
            code: codeRenderer
        } })));
const FipCP = () => (React.createElement("div", { className: "fip-usage-cp" },
    React.createElement(FipCategory, null),
    React.createElement(ReactMarkdown, { source: fipcp, escapeHtml: true, renderers: {
            code: codeRenderer
        } })));
const FipSMP = () => (React.createElement("div", { className: "fip-usage-smp" },
    React.createElement(FipPickers, null),
    React.createElement(ReactMarkdown, { source: fipsmp, escapeHtml: true, renderers: {
            code: codeRenderer
        } })));
const FipAR = () => (React.createElement("div", { className: "fip-usage-ar" },
    React.createElement(FipAttribute, null),
    React.createElement(ReactMarkdown, { source: fipar, escapeHtml: true, renderers: {
            code: codeRenderer
        } })));
const FipCR = () => (React.createElement("div", { className: "fip-usage-cr" },
    React.createElement(FipCustom, null),
    React.createElement(ReactMarkdown, { source: fipcr, escapeHtml: true, renderers: {
            code: codeRenderer
        } })));
const links = {
    fipncp: {
        title: "Non Categorized Picker",
        component: FipNCP,
        path: ""
    },
    fipcp: {
        title: "Categorized Picker",
        component: FipCP,
        path: "fip-non-categorized-picker/"
    },
    fipsmp: {
        title: "Single/Multi Picker",
        component: FipSMP,
        path: "fip-types-of-pickers/"
    },
    fipar: {
        title: "Attribute Rendering",
        component: FipAR,
        path: "fip-attribute-rendering/"
    },
    fipcr: {
        title: "Custom Rendering SVG",
        component: FipCR,
        path: "fip-custom-rendering/"
    }
};
const BasicUsage = () => (React.createElement("div", { className: "fip-usage" },
    React.createElement(ReactMarkdown, { source: basicusage, escapeHtml: true, renderers: {
            code: codeRenderer
        } }),
    React.createElement("h3", null, "Examples with Code"),
    React.createElement("hr", null),
    React.createElement("nav", { className: "nav nav-pills nav-justified" }, Object.keys(links).map(key => (React.createElement(NavLink, { key: key, to: `/basic-usage/${links[key].path}`, className: "nav-link", activeClassName: "active", exact: true }, links[key].title)))),
    React.createElement("hr", null),
    React.createElement(AnimatedSwitch, { atEnter: fadeInUp.atEnter, atLeave: fadeInUp.atLeave, atActive: fadeInUp.atActive, mapStyles: fadeInUp.mapStyles, className: "usage-wrapper" }, Object.keys(links).map(key => (React.createElement(Route, { key: key, path: `/basic-usage/${links[key].path}/`, component: links[key].component, exact: true }))))));
export default BasicUsage;
//# sourceMappingURL=BasicUsage.js.map