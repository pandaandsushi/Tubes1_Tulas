"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighScoreTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useHighScore_1 = require("../hooks/useHighScore");
const Spinner_1 = require("./Spinner");
const Table_1 = require("./Table");
exports.HighScoreTable = (0, react_1.memo)((props) => {
    const { seasonId } = props;
    if (!seasonId) {
        return (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {});
    }
    const highscore = (0, useHighScore_1.useHighScore)(seasonId);
    return ((0, jsx_runtime_1.jsx)(Table_1.Table, { label: "Highscore", cols: ['Name', 'Team', 'Score'], data: highscore.map((item) => {
            return {
                name: item.botName,
                team: item.teamLogotype !== '' ? ((0, jsx_runtime_1.jsx)("img", { src: item.teamLogotype, alt: "school-logo" })) : (item.team),
                score: item.score,
            };
        }) }));
});
//# sourceMappingURL=HighScoreTable.js.map