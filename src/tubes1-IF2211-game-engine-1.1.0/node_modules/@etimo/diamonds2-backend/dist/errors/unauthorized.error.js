"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const base_error_1 = require("./base.error");
class UnauthorizedError extends base_error_1.DiamondsBaseError {
    constructor(message) {
        super(message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized.error.js.map