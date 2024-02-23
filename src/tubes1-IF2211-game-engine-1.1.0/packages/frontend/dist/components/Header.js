"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const MoonIcon_1 = require("./MoonIcon");
const SunIcon_1 = require("./SunIcon");
exports.Header = (0, react_1.memo)((props) => {
    const location = (0, react_router_dom_1.useLocation)();
    const { darkMode, toggleDarkMode } = props;
    const toggleLink = (location) => {
        if (location.includes('teams')) {
            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "Game" });
        }
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/teams", children: "Teams" });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "text-header grid grid-cols-2 mx-3 my-2 lg:mx-14 lg:my-6 items-center lg:items-center border-gray-100 dark:border-slate-700 border-b-2 pb-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold dark:text-gray-300", children: "Diamonds" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-self-end", children: [toggleLink(location.pathname), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "https://github.com/Etimo/diamonds2", target: "_blank", className: "ml-3", children: "How to play" }), (0, jsx_runtime_1.jsx)("button", { onClick: toggleDarkMode, className: "ml-6", children: darkMode ? (0, jsx_runtime_1.jsx)(SunIcon_1.SunIcon, {}) : (0, jsx_runtime_1.jsx)(MoonIcon_1.MoonIcon, {}) })] })] }));
});
exports.Header.displayName = 'Header';
//# sourceMappingURL=Header.js.map