"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table_1 = require("./Table");
exports.ScoreTable = (0, react_1.memo)((props) => {
    const { botScores } = props;
    return ((0, jsx_runtime_1.jsx)(Table_1.Table, { label: `Final Score`, cols: ['Name', 'Score'], data: botScores }));
});
//# sourceMappingURL=ScoreTable.js.map