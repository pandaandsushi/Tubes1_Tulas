"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const base_error_1 = require("./base.error");
class ConflictError extends base_error_1.DiamondsBaseError {
    constructor(message, errorTag) {
        super(message, errorTag);
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=conflict.error.js.map