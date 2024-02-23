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
exports.TimingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let TimingInterceptor = class TimingInterceptor {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    intercept(context, next) {
        const req = context.getArgByIndex(0);
        const res = context.getArgByIndex(1);
        const now = Date.now();
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => this.logger.debug(`Request timing for ${req.url}: ${Date.now() - now}ms`)));
    }
};
TimingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_1.Logger])
], TimingInterceptor);
exports.TimingInterceptor = TimingInterceptor;
//# sourceMappingURL=timing.interceptor.js.map