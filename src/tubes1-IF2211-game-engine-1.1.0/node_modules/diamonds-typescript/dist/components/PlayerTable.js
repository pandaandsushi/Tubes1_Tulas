"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table_1 = require("./Table");
const images_1 = require("./images");
exports.PlayerTable = (0, react_1.memo)((props) => {
    const { bots, boardId } = props;
    return ((0, jsx_runtime_1.jsx)(Table_1.Table, { label: `Board ${boardId} players`, cols: ['Name', 'Diamonds', 'Score', 'Time'], data: bots.map(({ name, diamonds, score, millisecondsLeft }) => ({
            Name: name,
            Diamonds: ((0, jsx_runtime_1.jsx)("div", { className: "flex", children: Array.from({ length: diamonds }, (_, index) => ((0, jsx_runtime_1.jsx)("img", { className: "w-[20%]", src: images_1.diamond, alt: "diamond" }, index))) })),
            Score: score,
            Time: `${Math.round(millisecondsLeft / 1000)}s`,
        })) }));
});
//# sourceMappingURL=PlayerTable.js.map