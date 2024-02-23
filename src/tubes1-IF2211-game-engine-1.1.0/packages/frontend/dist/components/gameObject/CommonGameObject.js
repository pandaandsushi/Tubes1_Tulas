"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonGameObject = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CommonGameObject = ({ characterName, characterImg, imageClassName, index = 2, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full", children: [characterName && ((0, jsx_runtime_1.jsx)("p", { className: "text-[6px] text-black dark:text-white max-w-[98%] self-center sm:text-[10px] bg-gray-50 dark:bg-gray-800 overflow-hidden whitespace-nowrap truncate", children: characterName })), (0, jsx_runtime_1.jsx)("img", { src: characterImg, className: `w-[70%] h-[70%] self-center ${imageClassName}`, alt: characterName, style: {
                    zIndex: index,
                } })] }));
};
exports.CommonGameObject = CommonGameObject;
//# sourceMappingURL=CommonGameObject.js.map