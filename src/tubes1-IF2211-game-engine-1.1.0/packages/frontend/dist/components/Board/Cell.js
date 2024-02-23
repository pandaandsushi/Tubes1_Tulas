"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const gameObject_1 = require("../gameObject");
const renderGameCharacterComponent = (gameObject) => {
    switch (gameObject.type) {
        case 'BotGameObject':
        case 'DummyBotGameObject':
            return (0, jsx_runtime_1.jsx)(gameObject_1.BotComponent, { ...gameObject.properties });
        case 'DiamondGameObject':
            return (0, jsx_runtime_1.jsx)(gameObject_1.DiamondComponent, { ...gameObject.properties });
        case 'BaseGameObject':
            return (0, jsx_runtime_1.jsx)(gameObject_1.BaseComponent, { ...gameObject.properties });
        case 'TeleportGameObject':
            return (0, jsx_runtime_1.jsx)(gameObject_1.TeleportComponent, {});
        case 'DiamondButtonGameObject':
            return (0, jsx_runtime_1.jsx)(gameObject_1.DiamondButtonComponent, {});
        default:
            return null;
    }
};
exports.Cell = (0, react_1.memo)((props) => {
    const { gameObjects, id } = props;
    const renderGameObject = (gameObject, index) => ((0, jsx_runtime_1.jsx)("div", { className: "absolute w-[100%]", children: renderGameCharacterComponent(gameObject) }, index));
    return ((0, jsx_runtime_1.jsx)("div", { className: `border-l w-full aspect-square relative overflow-hidden ${gameObjects && gameObjects.length > 0
            ? 'flex items-center justify-center'
            : 'justify-center'}`, children: gameObjects.map((gameObject, index) => renderGameObject(gameObject, index)) }, id));
});
//# sourceMappingURL=Cell.js.map