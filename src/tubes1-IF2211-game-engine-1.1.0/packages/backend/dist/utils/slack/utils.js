"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offSeasonId = exports.slackError = exports.getSlackHeaders = exports.showModal = void 0;
const axios_1 = __importDefault(require("axios"));
const showModal = async (view, type = "open") => {
    axios_1.default
        .post(`https://slack.com/api/views.${type}`, view, {
        headers: (0, exports.getSlackHeaders)(),
    })
        .then((response) => {
        const data = response.data;
        if (!data.ok) {
            return data.error;
        }
    })
        .catch((error) => {
        console.log("-Error: ", error);
    });
    return;
};
exports.showModal = showModal;
const getSlackHeaders = () => {
    return {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env["SLACK_ACCESS_TOKEN"]}`,
    };
};
exports.getSlackHeaders = getSlackHeaders;
const slackError = (errorTag, message) => {
    return {
        response_action: "errors",
        errors: {
            [errorTag]: message,
        },
    };
};
exports.slackError = slackError;
exports.offSeasonId = "00000000-0000-0000-0000-000000000000";
//# sourceMappingURL=utils.js.map