// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import className from "classnames";
import { flattenPossiblyCategorizedSource, fuzzySearch, getSourceType, InvalidSourceException } from "../helpers/iconHelpers";
class FipIconContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChangePage = (event, force = null) => {
            let nextPage = this.props.currentPage;
            let viewPage;
            const { totalPage } = this.state;
            if (force !== null) {
                if (force === "next") {
                    nextPage += 1;
                }
                else {
                    nextPage -= 1;
                }
            }
            else {
                nextPage = parseInt(event.target.value, 10) - 1;
            }
            if (nextPage < 0) {
                nextPage = 0;
            }
            if (nextPage > totalPage - 1) {
                nextPage = totalPage - 1;
            }
            viewPage = nextPage + 1;
            // This is an event listened
            // Here, the input can very much be empty
            // If so, just assume the currentPage is 0
            // But don't change the viewPage
            if (force === null && Number.isNaN(nextPage)) {
                nextPage = 0;
                viewPage = "";
            }
            // Set the viewPage
            this.setState({ viewPage });
            this.props.handleChangePage(nextPage);
            // Rest will be handled by lifecycle
        };
        this.handlePageKeyBoard = (event, force) => {
            if (event.keyCode === 13 || event.keyCode === 32) {
                this.handleChangePage({}, force);
            }
        };
        this.handleChangeValue = value => {
            this.props.handleChangeValue(value);
        };
        this.handleValueKeyboard = (event, value) => {
            if (event.keyCode === 13 || event.keyCode === 32) {
                this.handleChangeValue(value);
            }
        };
        // Just set the viewPage because it will be
        // internally managed
        // everything else will be props depedent so look into lifecycle
        // getDerivedStateFromProps
        this.state = {
            viewPage: this.props.currentPage + 1
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // Create iconSet, searchSet
        const iconSet = FipIconContainer.getCategoryFilteredState(nextProps.currentCategory, nextProps.categories, nextProps.icons);
        const searchSet = FipIconContainer.getCategoryFilteredState(nextProps.currentCategory, nextProps.categories, nextProps.search === null ? nextProps.icons : nextProps.search);
        // Now get the active icons and titles
        const { activeIcons, activeTitles } = FipIconContainer.getActiveIcons(iconSet, searchSet, nextProps.currentSearch);
        // debugger; // eslint-disable-line
        // Now create the new state
        // We only basically need to create the iconView
        // for rendering
        // It depends on currentPage, activeIcons
        const { currentPage, iconsPerPage } = nextProps;
        const newState = {
            iconView: FipIconContainer.getCurrentViewIcons(activeIcons, iconsPerPage, currentPage),
            titleView: FipIconContainer.getCurrentViewIcons(activeTitles, iconsPerPage, currentPage),
            totalPage: Math.ceil(activeIcons.length / iconsPerPage)
        };
        // Now check if viewPage is empty, then don't reset
        // otherwise do reset
        if (prevState.viewPage !== "") {
            newState.viewPage = nextProps.currentPage + 1;
        }
        return newState;
    }
    /**
     * Get the current set of icons, based on search
     *
     * @param {array} currentIconsSet icon set from where to filter
     * @returns {array} filtered list of icons to slice on
     */
    static getActiveIcons(currentIconsSet, currentSearchSet, searchString) {
        const iconSet = [...currentIconsSet];
        const searchSet = [...currentSearchSet];
        if (searchString === "" || searchString === null) {
            return { activeIcons: iconSet, activeTitles: searchSet };
        }
        const nIconSet = [];
        const nSearchSet = [];
        iconSet.forEach((value, index) => {
            if (fuzzySearch(searchString, currentSearchSet[index])) {
                if (!nIconSet.includes(value)) {
                    nIconSet.push(value);
                }
                if (!nSearchSet.includes(currentSearchSet[index])) {
                    nSearchSet.push(currentSearchSet[index]);
                }
            }
        });
        return {
            activeIcons: nIconSet,
            activeTitles: nSearchSet
        };
    }
    /**
     * Get icons or search set based on selected category
     *
     * @param {number} currentCategory current categories
     * @param {string} key the props key to use
     * @returns {array} filtered and flattened source
     */
    static getCategoryFilteredState(currentCategory, categories, source) {
        let category = null;
        // First check for sourceType
        const sourceType = getSourceType(source);
        if (Array.isArray(categories)) {
            if (sourceType !== "object") {
                throw new InvalidSourceException(sourceType, "object");
            }
        }
        else if (sourceType !== "array") {
            // do check if source if of type array
            throw new InvalidSourceException(sourceType, "array");
        }
        // Now get the category key
        if (currentCategory !== 0 && Array.isArray(categories)) {
            category = categories[currentCategory] || null;
        }
        const currentSourceSet = flattenPossiblyCategorizedSource(source, category);
        return currentSourceSet;
    }
    /**
     * Get the set of icons to show on current page
     *
     * @param {array} iconSet Active icon set from where to slice
     * @param {number} iconsPerPage Number of icons per page
     * @param {number} currentPage current page (0 based)
     * @return {array} sliced list of icons to show on currentPage
     */
    static getCurrentViewIcons(iconSet, iconsPerPage, currentPage) {
        const start = currentPage * iconsPerPage;
        const end = (currentPage + 1) * iconsPerPage;
        return iconSet.slice(start, end);
    }
    renderPager() {
        if (this.state.totalPage < 1) {
            return null;
        }
        const left = this.props.currentPage > 0 ? (React.createElement("span", { className: "rfipicons__left", role: "button", tabIndex: 0, onKeyDown: event => this.handlePageKeyBoard(event, "prev"), onClick: event => this.handleChangePage(event, "prev") },
            React.createElement("span", { role: "presentation", className: "rfipicons__label", "aria-label": "Left" },
                React.createElement("i", { className: "fipicon-angle-left" })))) : null;
        const right = this.props.currentPage < this.state.totalPage - 1 ? (React.createElement("span", { className: "rfipicons__right", role: "button", tabIndex: 0, onKeyDown: event => this.handlePageKeyBoard(event, "next"), onClick: event => this.handleChangePage(event, "next") },
            React.createElement("span", { role: "presentation", className: "rfipicons__label", "aria-label": "Right" },
                React.createElement("i", { className: "fipicon-angle-right" })))) : null;
        return (React.createElement("div", { className: "rfipicons__pager" },
            React.createElement("div", { className: "rfipicons__num" },
                React.createElement("input", { value: this.state.viewPage, onChange: this.handleChangePage, className: "rfipicons__cp", type: "tel", min: 1 }),
                React.createElement("span", { className: "rfipicons__sp" }, "/"),
                React.createElement("span", { className: "rfipicons__tp" }, this.state.totalPage)),
            React.createElement("div", { className: "rfipicons__arrow" },
                left,
                right)));
    }
    renderIconView() {
        if (this.state.totalPage > 0) {
            return this.state.iconView.map((icon, index) => {
                const iconClass = className("rfipicons__icon", {
                    "rfipicons__icon--selected": this.props.value === icon ||
                        (Array.isArray(this.props.value) && this.props.value.includes(icon))
                });
                return (React.createElement("span", { className: iconClass, key: icon, title: this.state.titleView[index] },
                    React.createElement("span", { className: "rfipicons__ibox", tabIndex: 0, role: "button", onClick: () => this.handleChangeValue(icon), onKeyDown: e => this.handleValueKeyboard(e, icon) }, this.props.renderIcon(icon))));
            });
        }
        return (React.createElement("span", { className: "rfipicons__icon--error" },
            React.createElement("span", { className: "rfipicons__ibox--error" }, this.props.noIconPlaceholder)));
    }
    render() {
        return (React.createElement("div", { className: "rfipicons" },
            this.renderPager(),
            React.createElement("div", { className: "rfipicons__selector" }, this.renderIconView())));
    }
}
FipIconContainer.defaultProps = {
    categories: null,
    currentCategory: null,
    search: null
};
export default FipIconContainer;
//# sourceMappingURL=FipIconContainer.js.map