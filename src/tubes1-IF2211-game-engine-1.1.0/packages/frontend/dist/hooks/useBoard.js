"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoard = void 0;
const react_1 = require("react");
const useFetchRepeatedly_1 = require("./useFetchRepeatedly");
const useBoard = (boardId, delay) => {
    const fetchedBoard = (0, useFetchRepeatedly_1.useFetchRepeatedly)(`/api/boards/${boardId}`, delay, []);
    const [board, setBoard] = (0, react_1.useState)({
        width: 0,
        height: 0,
        grid: [],
    });
    const [bots, setBots] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (!fetchedBoard.gameObjects)
            return;
        const grid = [];
        for (let i = 0; i < fetchedBoard.height; i++) {
            const row = [];
            for (let j = 0; j < fetchedBoard.width; j++) {
                row.push([]);
            }
            grid.push(row);
        }
        const botObjects = [];
        fetchedBoard.gameObjects.forEach((gameObject) => {
            const { position } = gameObject;
            if (position &&
                position.y >= 0 &&
                position.y < fetchedBoard.height &&
                position.x >= 0 &&
                position.x < fetchedBoard.width) {
                grid[position.y][position.x].push(gameObject);
                if (['DummyBotGameObject', 'BotGameObject'].includes(gameObject.type)) {
                    botObjects.push(gameObject.properties);
                }
            }
        });
        const mappedBoard = {
            width: fetchedBoard.width,
            height: fetchedBoard.height,
            grid: grid,
        };
        setBoard(mappedBoard);
        setBots(botObjects);
    }, [fetchedBoard]);
    return { board, bots };
};
exports.useBoard = useBoard;
//# sourceMappingURL=useBoard.js.map