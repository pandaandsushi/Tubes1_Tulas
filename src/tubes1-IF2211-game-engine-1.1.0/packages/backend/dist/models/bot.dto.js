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
exports.BotDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const position_dto_1 = require("./position.dto");
class BotDto {
    name;
    base;
    position;
    diamonds;
    timeJoined;
    millisecondsLeft;
    score;
    botId;
    nextMoveAvailableAt;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The name of the bot.",
    }),
    __metadata("design:type", String)
], BotDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The position of the base for this bot.",
    }),
    __metadata("design:type", position_dto_1.PositionDto)
], BotDto.prototype, "base", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The current position of the bot.",
    }),
    __metadata("design:type", position_dto_1.PositionDto)
], BotDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Number of diamonds this bot is carrying.",
    }),
    __metadata("design:type", Number)
], BotDto.prototype, "diamonds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The time when this bot joined the board.",
    }),
    __metadata("design:type", Date)
], BotDto.prototype, "timeJoined", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The number of milliseconds left before the session ends for this bot.",
    }),
    __metadata("design:type", Number)
], BotDto.prototype, "millisecondsLeft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The value of the diamonds this bot has managed to drop of at its base.",
    }),
    __metadata("design:type", Number)
], BotDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "An id of the bot.",
    }),
    __metadata("design:type", String)
], BotDto.prototype, "botId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "A calculated timestamp for when this bot can perform its next move.",
    }),
    __metadata("design:type", Date)
], BotDto.prototype, "nextMoveAvailableAt", void 0);
exports.BotDto = BotDto;
//# sourceMappingURL=bot.dto.js.map