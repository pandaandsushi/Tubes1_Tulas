"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparklesComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SparklesComponent = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sparkles", children: [(0, jsx_runtime_1.jsx)("svg", { id: "one", width: "100%", height: "100%", viewBox: "0 0 100 100", children: (0, jsx_runtime_1.jsxs)("g", { id: "copy-1", className: "group", children: [(0, jsx_runtime_1.jsx)("g", { className: "large", children: (0, jsx_runtime_1.jsx)("path", { id: "large", d: "M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z", fill: "#badbff" }) }), (0, jsx_runtime_1.jsx)("g", { className: "large-2", transform: "rotate(45)", children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: "#large" }) }), (0, jsx_runtime_1.jsx)("g", { className: "small", children: (0, jsx_runtime_1.jsx)("path", { id: "small", d: "M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z", fill: "white" }) })] }) }), (0, jsx_runtime_1.jsx)("svg", { id: "two", width: "50%", height: "50%", viewBox: "0 0 100 100", children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: "#copy-1" }) }), (0, jsx_runtime_1.jsx)("svg", { id: "three", width: "70%", height: "70%", viewBox: "0 0 100 100", children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: "#copy-1" }) })] }));
};
exports.SparklesComponent = SparklesComponent;
//# sourceMappingURL=SparklesComponent.js.map