"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useFetchRepeatedly_1 = require("./useFetchRepeatedly");
exports.default = () => {
    const delay = 60000; // 1min
    const fetchedSeasons = (0, useFetchRepeatedly_1.useFetchRepeatedly)(`api/seasons`, delay, []);
    const [seasons, setSeasons] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setSeasons(fetchedSeasons);
    }, [fetchedSeasons]);
    return seasons;
};
//# sourceMappingURL=useSeasons.js.map