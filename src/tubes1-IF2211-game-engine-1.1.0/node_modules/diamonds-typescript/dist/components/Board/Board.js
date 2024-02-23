"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useResize_1 = __importDefault(require("../../hooks/useResize"));
const Cell_1 = require("./Cell");
exports.Board = (0, react_1.memo)((props) => {
    const { board } = props;
    const [containerRef, maxWidth] = (0, useResize_1.default)({
        root: document.querySelector('#test'),
        rootMargin: '0px',
        threshold: 0,
    });
    return ((0, jsx_runtime_1.jsx)("div", { id: "test", className: "items-center flex flex-col relative m-auto border-t w-[85vh] h-[85vh] lg:w-80%", ref: containerRef, style: { maxWidth: maxWidth.maxWidth }, children: board.grid.map((row, rowIndex) => {
            return ((0, jsx_runtime_1.jsx)("div", { className: "items-center flex flex-row border-r border-b w-full h-full", children: row.map((cell, columnIndex) => ((0, jsx_runtime_1.jsx)(Cell_1.Cell, { id: `row ${rowIndex} column ${columnIndex}`, gameObjects: cell }, `row ${rowIndex} column ${columnIndex}`))) }, rowIndex));
        }) }));
});
//# sourceMappingURL=Board.js.map