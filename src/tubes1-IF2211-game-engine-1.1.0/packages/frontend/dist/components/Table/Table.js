"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.Table = (0, react_1.memo)((props) => {
    const { cols, data, label = '' } = props;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { className: "text-label mb-2.5", children: label }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-100  border-b border-b-gray-500 w-full", children: (0, jsx_runtime_1.jsx)("tr", { className: "", children: cols.map((col, index) => ((0, jsx_runtime_1.jsx)("th", { className: "font-sans text-xs text-etimo font-bold text-left p-2.5 first:rounded-tl-md last:rounded-tr-md", children: col }, 'th-' + index))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map((item, index) => ((0, jsx_runtime_1.jsx)("tr", { className: "font-sans text-etimo text-xs font-normal border-b border-b-gray-500 last:border-none", children: Object.values(item).map((value, index2) => ((0, jsx_runtime_1.jsx)("td", { className: "p-2.5 whitespace-nowrap min-w-[80px] first:w-[99%]", children: value }, 'td' + index + index2))) }, 'tr-' + index))) })] })] }));
});
exports.Table.displayName = 'Table';
//# sourceMappingURL=Table.js.map