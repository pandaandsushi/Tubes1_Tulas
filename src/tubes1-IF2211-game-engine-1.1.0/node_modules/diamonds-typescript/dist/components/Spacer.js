"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.Spacer = (0, react_1.memo)(({ vertical = false }) => {
    return vertical ? (0, jsx_runtime_1.jsx)("div", { className: "w-[1px] bg-black h-full" }) : (0, jsx_runtime_1.jsx)("hr", {});
});
exports.Spacer.displayName = 'Spacer';
//# sourceMappingURL=Spacer.js.map