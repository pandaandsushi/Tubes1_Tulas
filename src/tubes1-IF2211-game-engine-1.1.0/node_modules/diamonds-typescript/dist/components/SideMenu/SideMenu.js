"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useFetch_1 = __importDefault(require("../../hooks/useFetch"));
const BoardPicker_1 = require("../BoardPicker");
const PlayerTable_1 = require("../PlayerTable");
const Rules_1 = require("../Rules");
const ScoreTable_1 = require("../ScoreTable");
const SeasonPicker_1 = require("../SeasonPicker");
exports.SideMenu = (0, react_1.memo)((props) => {
    const { boardId, onBoardChange, bots, botScores } = props;
    const { response: currentSeason } = (0, useFetch_1.default)('api/seasons/current', '0');
    const offSeasonId = '00000000-0000-0000-0000-000000000000';
    const [seasonId, setSeasonId] = (0, react_1.useState)(offSeasonId);
    const [rulesVisible, setRulesVisible] = (0, react_1.useState)(false);
    const onSeasonChange = (event) => {
        setSeasonId(event.target.value);
    };
    const closeRules = () => {
        setRulesVisible(false);
    };
    const selectedSeasonId = seasonId !== '0' ? seasonId : currentSeason.id;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "border border-gray-200 dark:border-slate-400 rounded-lg overflow-y-auto flex flex-col p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-6", children: (0, jsx_runtime_1.jsx)(BoardPicker_1.BoardPicker, { boardId: boardId, onChange: onBoardChange }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(PlayerTable_1.PlayerTable, { bots: bots, boardId: boardId }) }), (0, jsx_runtime_1.jsxs)("div", { className: "my-6", children: [(0, jsx_runtime_1.jsx)(SeasonPicker_1.SeasonPicker, { seasonId: selectedSeasonId, onChange: onSeasonChange }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setRulesVisible(true), className: "font-sans text-etimo dark:text-slate-400 text-xs 4xl:text-lg font-normal", children: "Season rules" }) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ScoreTable_1.ScoreTable, { botScores: botScores }) }), (0, jsx_runtime_1.jsx)(Rules_1.Rules, { onClose: closeRules, visible: rulesVisible, seasonId: selectedSeasonId })] }));
});
exports.SideMenu.displayName = 'SideMenu';
//# sourceMappingURL=SideMenu.js.map