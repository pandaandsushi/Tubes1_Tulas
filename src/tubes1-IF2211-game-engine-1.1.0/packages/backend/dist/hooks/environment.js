"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocal = void 0;
const isLocal = () => {
    return process.env.ENVIRONMENT === "development";
};
exports.isLocal = isLocal;
//# sourceMappingURL=environment.js.map