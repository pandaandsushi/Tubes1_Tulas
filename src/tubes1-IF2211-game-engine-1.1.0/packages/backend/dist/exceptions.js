"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
class ValidationException extends Error {
    constructor(botErrors) {
        super(botErrors);
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=exceptions.js.map