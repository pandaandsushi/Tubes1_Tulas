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
exports.BotRegistrationPublicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BotRegistrationPublicDto {
    id;
    name;
    email;
    // public static from(dto: Partial<BotRegistrationPublicDto>) {
    //   const botRegistrationPublicObj = new BotRegistrationPublicDto();
    //   botRegistrationPublicObj.botName = dto.botName;
    //   botRegistrationPublicObj.email = dto.email;
    //   botRegistrationPublicObj.id = dto.id;
    //   return botRegistrationPublicObj;
    // }
    static fromEntity(entity) {
        return {
            name: entity.name,
            email: entity.email,
            id: entity.id,
        };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Your unique, and secret, token. Use this for all your requests.",
    }),
    __metadata("design:type", String)
], BotRegistrationPublicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The name you registered with.",
    }),
    __metadata("design:type", String)
], BotRegistrationPublicDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The email you registered with.",
    }),
    __metadata("design:type", String)
], BotRegistrationPublicDto.prototype, "email", void 0);
exports.BotRegistrationPublicDto = BotRegistrationPublicDto;
//# sourceMappingURL=bot-registration-public.dto.js.map