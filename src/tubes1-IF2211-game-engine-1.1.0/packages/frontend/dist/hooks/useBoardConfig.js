"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoardConfig = void 0;
const react_1 = require("react");
const useFetch_1 = __importDefault(require("./useFetch"));
function useBoardConfig(seasonId) {
    const delay = 60000; // 1 min
    const { response, error, isLoading } = (0, useFetch_1.default)(`api/seasons/${seasonId}/rules/`, []);
    const [boardConfig, setBoardConfig] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (response) {
            setBoardConfig(response);
        }
    }, [response]);
    return boardConfig;
}
exports.useBoardConfig = useBoardConfig;
//# sourceMappingURL=useBoardConfig.js.map