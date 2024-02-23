"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const base_error_1 = require("./base.error");
class ForbiddenError extends base_error_1.DiamondsBaseError {
    constructor(message, errorTag) {
        super(message, errorTag);
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=forbidden.error.js.map