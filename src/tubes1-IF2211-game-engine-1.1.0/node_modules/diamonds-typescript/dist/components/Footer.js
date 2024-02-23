"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const etimoLogo_png_1 = __importDefault(require("../assets/etimoLogo.png"));
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "dark:bg-gray-800 pt-[2rem] 2xl:pt-[3rem] pb-8 w-full flex justify-center items-center sticky top-[100vh]", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Powered by" }), (0, jsx_runtime_1.jsx)("div", { className: "w-[100px] ml-5", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "https://etimo.se/", target: "_blank", children: (0, jsx_runtime_1.jsx)("img", { src: etimoLogo_png_1.default, alt: "etimo-logo" }) }) })] }));
};
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map