"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoardIds = void 0;
const react_1 = require("react");
const useFetchRepeatedly_1 = require("./useFetchRepeatedly");
function useBoardIds() {
    const delay = 10000; // 10s
    const boards = (0, useFetchRepeatedly_1.useFetchRepeatedly)(`/api/boards`, delay, []);
    const [ids, setIds] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const boardIds = boards.map((board) => board.id);
        setIds(boardIds);
    }, [boards]);
    return ids;
}
exports.useBoardIds = useBoardIds;
//# sourceMappingURL=useBoardIds.js.map