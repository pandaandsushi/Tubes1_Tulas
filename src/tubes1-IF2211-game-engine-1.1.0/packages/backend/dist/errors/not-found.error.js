"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const base_error_1 = require("./base.error");
class NotFoundError extends base_error_1.DiamondsBaseError {
    constructor(message) {
        super(message);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found.error.js.map