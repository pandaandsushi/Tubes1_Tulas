"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchRepeatedly = void 0;
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const useInterval_1 = require("./useInterval");
function useFetchRepeatedly(url, delay, baseResponse) {
    const [response, setResponse] = (0, react_1.useState)(baseResponse);
    const [isFetching, setIsFetching] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const fetch = async () => {
            const { data } = await axios_1.default.get(url);
            setResponse(data);
        };
        fetch();
    }, [url]);
    (0, useInterval_1.useInterval)(() => {
        const fetch = async () => {
            if (!isFetching) {
                setIsFetching(true);
                const { data } = await axios_1.default.get(url);
                setResponse(data);
                setIsFetching(false);
            }
        };
        fetch();
    }, delay);
    return response;
}
exports.useFetchRepeatedly = useFetchRepeatedly;
//# sourceMappingURL=useFetchRepeatedly.js.map