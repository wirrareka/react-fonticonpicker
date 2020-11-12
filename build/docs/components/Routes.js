// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Sidebar from "./Sidebar";
import routes from "../helpers/routes";
import ScrollToTop from "./ScrollToTop";
import FourOFour from "./pages/404";
import BasicUsage from "./pages/BasicUsage";
import Examples from "./pages/Examples";
import Installation from "./pages/Installation";
import Introduction from "./pages/Introduction";
import Props from "./pages/Props";
import Themes from "./pages/Themes";
import Meta from "./pages/Meta";
import { fadeInLeft } from "../helpers/routeTransition";
let routeBase = "/react-fonticonpicker";
if (process.env.NODE_ENV === "development") {
    routeBase = "/";
}
const components = {
    BasicUsage,
    Examples,
    Installation,
    Introduction,
    Props,
    Themes,
    Meta
};
const Routes = () => (React.createElement(BrowserRouter, { basename: routeBase },
    React.createElement(ScrollToTop, null,
        React.createElement("div", { className: "site-main" },
            React.createElement(Sidebar, null),
            React.createElement("main", { className: "container-fluid app-main" },
                React.createElement("article", { className: "site-article" },
                    React.createElement(AnimatedSwitch, { atEnter: fadeInLeft.atEnter, atLeave: fadeInLeft.atLeave, atActive: fadeInLeft.atActive, mapStyles: fadeInLeft.mapStyles, className: "route-wrapper" },
                        routes.map(route => {
                            const RouteComponent = components[route.component];
                            return (React.createElement(Route, { key: route.path, path: route.path, exact: route.exact || false, component: RouteComponent }));
                        }),
                        React.createElement(Route, { component: FourOFour }))))))));
export default Routes;
//# sourceMappingURL=Routes.js.map