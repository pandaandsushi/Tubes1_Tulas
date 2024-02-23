"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
exports.default = (url, baseResponse) => {
    const [response, setResponse] = (0, react_1.useState)(baseResponse);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(false);
    const fetch = async () => {
        try {
            const response = await axios_1.default.get(url);
            setResponse(response.data);
        }
        catch (error) {
            setResponse(undefined);
            setError(true);
        }
    };
    (0, react_1.useEffect)(() => {
        setIsLoading(true);
        fetch();
        setIsLoading(false);
    }, [url]);
    return { response, error, isLoading };
};
//# sourceMappingURL=useFetch.js.map