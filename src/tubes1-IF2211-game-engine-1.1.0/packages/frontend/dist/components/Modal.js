"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal = ({ onClose, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", "aria-labelledby": "modal-title", role: "dialog", "aria-modal": "true", onClick: onClose, children: [(0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: (0, jsx_runtime_1.jsx)("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: (0, jsx_runtime_1.jsx)("div", { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4", children: (0, jsx_runtime_1.jsx)("div", { className: "sm:flex sm:items-start", children: children }) }) }) }) })] }));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map