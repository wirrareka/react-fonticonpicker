// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import { NavLink } from "react-router-dom";
import className from "classnames";
import routes from "../helpers/routes";
class Sidebar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false
        };
        this.btnRef = React.createRef();
        this.handleOuterClick = e => {
            if (this.btnRef.current.contains(e.target)) {
                return;
            }
            this.setState({ isOpen: false });
        };
        this.handleToggle = e => {
            e.preventDefault();
            this.setState(prevState => {
                const isOpen = !prevState.isOpen;
                return { isOpen };
            });
        };
    }
    componentDidMount() {
        document.addEventListener("click", this.handleOuterClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleOuterClick);
    }
    render() {
        const menuClass = className("hamburger", "hamburger--elastic", {
            "is-active": this.state.isOpen
        });
        const navClass = className("site-nav", {
            "is-open": this.state.isOpen
        });
        return (React.createElement("div", { className: "sidebar", ref: this.btnRef },
            React.createElement("button", { className: menuClass, type: "button", onClick: this.handleToggle },
                React.createElement("span", { className: "hamburger-box" },
                    React.createElement("span", { className: "hamburger-inner" }))),
            React.createElement("nav", { className: navClass },
                React.createElement("ul", { className: "nav-main" }, routes.map(item => (React.createElement("li", { key: item.component, className: "asd" },
                    React.createElement(NavLink, { to: item.link || item.path, activeClassName: "active", exact: item.exact || false, strict: true }, item.menu))))))));
    }
}
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map