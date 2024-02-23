"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHighScore = void 0;
const react_1 = require("react");
const useFetchRepeatedly_1 = require("./useFetchRepeatedly");
function useHighScore(seasonId) {
    const fetchedHighScore = (0, useFetchRepeatedly_1.useFetchRepeatedly)(`api/highscores/${seasonId}`, 5000, []);
    (0, react_1.useEffect)(() => { }, [fetchedHighScore]);
    if (!fetchedHighScore) {
        return [];
    }
    return fetchedHighScore;
}
exports.useHighScore = useHighScore;
//# sourceMappingURL=useHighScore.js.map