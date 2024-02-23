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
exports.BotRegistrationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BotRegistrationDto {
    email;
    name;
    password;
    team;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "A valid email address for this bot. Will be used for communication. Will for example be used if you are one of the winners.",
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], BotRegistrationDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The name you want to use for the bot.",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.NotContains)(" ", { message: "Bot name can not contain whitespace" }),
    __metadata("design:type", String)
], BotRegistrationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The password for your bot (Old bots don't have a password).",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BotRegistrationDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The abbreviation of the team you want to join.",
    }),
    __metadata("design:type", String)
], BotRegistrationDto.prototype, "team", void 0);
exports.BotRegistrationDto = BotRegistrationDto;
//# sourceMappingURL=bot-registration.dto.js.map