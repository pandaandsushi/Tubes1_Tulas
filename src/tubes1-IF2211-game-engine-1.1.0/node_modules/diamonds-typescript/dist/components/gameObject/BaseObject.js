"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const images_1 = require("../images");
const CommonGameObject_1 = require("./CommonGameObject");
exports.BaseComponent = (0, react_1.memo)(({ name }) => ((0, jsx_runtime_1.jsx)(CommonGameObject_1.CommonGameObject, { characterName: name, characterImg: images_1.base })));
//# sourceMappingURL=BaseObject.js.map