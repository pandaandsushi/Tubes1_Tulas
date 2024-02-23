"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useFetchRepeatedly_1 = require("./useFetchRepeatedly");
exports.default = () => {
    const delay = 60000; // 1min
    const fetchedTeams = (0, useFetchRepeatedly_1.useFetchRepeatedly)(`api/teams`, delay, []);
    const [teams, setTeams] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setTeams(fetchedTeams);
    }, [fetchedTeams]);
    return teams;
};
//# sourceMappingURL=useTeams.js.map