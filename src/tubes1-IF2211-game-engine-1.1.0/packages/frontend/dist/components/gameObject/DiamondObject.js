"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const images_1 = require("../images");
const CommonGameObject_1 = require("./CommonGameObject");
const SparklesComponent_1 = require("./SparklesComponent");
exports.DiamondComponent = (0, react_1.memo)(({ points }) => {
    const characterImg = points === 2 ? images_1.diamondRed : images_1.diamond;
    const imageClassName = 'diamond';
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(CommonGameObject_1.CommonGameObject, { characterImg: characterImg, imageClassName: imageClassName }), (0, jsx_runtime_1.jsx)(SparklesComponent_1.SparklesComponent, {})] }));
});
//# sourceMappingURL=DiamondObject.js.map