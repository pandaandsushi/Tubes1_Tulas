"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondsBaseError = void 0;
class DiamondsBaseError extends Error {
    errorTag;
    constructor(message, errorTag) {
        super(message);
        if (errorTag) {
            this.errorTag = errorTag;
        }
    }
}
exports.DiamondsBaseError = DiamondsBaseError;
//# sourceMappingURL=base.error.js.map