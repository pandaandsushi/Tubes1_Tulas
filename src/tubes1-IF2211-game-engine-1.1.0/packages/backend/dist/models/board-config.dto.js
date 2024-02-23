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
exports.BoardConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BoardConfigDto {
    id;
    seasonId;
    inventorySize;
    canTackle;
    teleporters;
    teleportRelocation;
    height;
    width;
    minimumDelayBetweenMoves;
    sessionLength;
    static fromSeasonWithBoardConfig(entity) {
        return {
            id: entity.boardConfig.id,
            seasonId: entity.id,
            inventorySize: entity.boardConfig.inventorySize,
            canTackle: entity.boardConfig.canTackle,
            teleporters: entity.boardConfig.teleporters,
            teleportRelocation: entity.boardConfig.teleportRelocation,
            height: entity.boardConfig.height,
            width: entity.boardConfig.width,
            minimumDelayBetweenMoves: entity.boardConfig.minimumDelayBetweenMoves,
            sessionLength: entity.boardConfig.sessionLength,
        };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BoardConfigDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BoardConfigDto.prototype, "seasonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "inventorySize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], BoardConfigDto.prototype, "canTackle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "teleporters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "teleportRelocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "minimumDelayBetweenMoves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BoardConfigDto.prototype, "sessionLength", void 0);
exports.BoardConfigDto = BoardConfigDto;
//# sourceMappingURL=board-config.dto.js.map