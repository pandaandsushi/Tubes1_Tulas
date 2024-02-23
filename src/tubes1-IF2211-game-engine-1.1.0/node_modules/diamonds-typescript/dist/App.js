"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const Footer_1 = require("./components/Footer");
const Home_1 = require("./components/Home");
const Teams_1 = require("./components/Teams");
const App = () => {
    const [darkMode, setDarkMode] = (0, react_1.useState)(true);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `w-screen min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(components_1.Header, { darkMode: darkMode, toggleDarkMode: toggleDarkMode }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/teams", element: (0, jsx_runtime_1.jsx)(Teams_1.Teams, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {})] }) }));
};
exports.default = App;
//# sourceMappingURL=App.js.map