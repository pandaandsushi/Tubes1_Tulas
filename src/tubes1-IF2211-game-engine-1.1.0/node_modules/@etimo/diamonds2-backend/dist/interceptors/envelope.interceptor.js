"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let EnvelopeInterceptor = class EnvelopeInterceptor {
    constructor() { }
    intercept(context, next) {
        const req = context.getArgByIndex(0);
        const res = context.getArgByIndex(1);
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (req.url.includes("/api/slack/")) {
                return data;
            }
            return {
                statusCode: res.status,
                timestamp: new Date().toISOString(),
                path: req.url,
                data,
            };
        }));
    }
};
EnvelopeInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EnvelopeInterceptor);
exports.EnvelopeInterceptor = EnvelopeInterceptor;
//# sourceMappingURL=envelope.interceptor.js.map