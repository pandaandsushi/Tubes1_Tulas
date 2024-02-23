"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const images_1 = require("./images");
const Spinner = () => {
    const numberOfDiamonds = 4;
    const diamondElements = Array.from({ length: numberOfDiamonds }, (_, index) => ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: images_1.diamond, alt: 'diamond' }) }, index)));
    return (0, jsx_runtime_1.jsx)("div", { className: "lds-ellipsis", children: diamondElements });
};
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map