"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.Select = (0, react_1.memo)((props) => {
    const { label, value, options, onChange } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-label", children: label }), (0, jsx_runtime_1.jsx)("select", { className: "border border-gray-800 rounded-md w-full max-w-[200px] h-8 p-1", value: value, onChange: onChange, children: options.map((option, index) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, index))) })] }));
});
exports.Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map