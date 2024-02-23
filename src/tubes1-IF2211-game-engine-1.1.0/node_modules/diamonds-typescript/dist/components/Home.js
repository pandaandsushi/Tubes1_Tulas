"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const useBoard_1 = require("../hooks/useBoard");
const Board_1 = require("./Board");
const SideMenu_1 = require("./SideMenu");
const Home = () => {
    const [boardId, setBoardId] = (0, react_1.useState)(1);
    const { board, bots } = (0, useBoard_1.useBoard)(boardId, 250);
    const [finalScores, setFinalScores] = (0, react_1.useState)({});
    const [started, setStarted] = (0, react_1.useState)(false);
    const [botNames, setBotNames] = (0, react_1.useState)(new Set());
    const onBoardChange = (event) => {
        setBoardId(parseInt(event.target.value));
    };
    (0, react_1.useEffect)(() => {
        bots.forEach((bot) => {
            if (!botNames.has(bot.name)) {
                setBotNames(new Set([...botNames, bot.name]));
            }
        });
        if (started) {
            if (bots.length == 0) {
                setStarted(false);
                const newFinalScore = {};
                for (const botName of [...botNames]) {
                    const url = encodeURI(`/api/recordings/score/last?botName=${botName}`);
                    axios_1.default.get(url).then((response) => {
                        const score = response.data;
                        console.log(`Bot name: ${botName}, bot score: ${score}`);
                        newFinalScore[botName] = score;
                    });
                }
                setFinalScores(newFinalScore);
            }
        }
        else {
            if (bots.length > 0) {
                setStarted(true);
                setFinalScores({});
                setBotNames(new Set());
            }
        }
    }, [bots]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-gray-50 dark:bg-gray-800 w-screen min-h-[70vh] flex flex-col my-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 grid grid-cols lg:grid-cols-[1fr_30%] mx-4 gap-4 lg:mx-14 lg:p-0", children: [(0, jsx_runtime_1.jsx)(Board_1.Board, { board: board }), (0, jsx_runtime_1.jsx)(SideMenu_1.SideMenu, { bots: bots, boardId: boardId, onBoardChange: onBoardChange, botScores: getBotScoreData(finalScores) })] }) }));
};
exports.Home = Home;
function getBotScoreData(finalScores) {
    const botScoreData = [];
    for (const key in finalScores) {
        botScoreData.push({ name: key, score: finalScores[key] });
    }
    botScoreData.sort((a, b) => b.score - a.score);
    return botScoreData;
}
//# sourceMappingURL=Home.js.map