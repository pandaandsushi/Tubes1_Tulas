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
exports.SeasonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SeasonDto {
    id;
    name;
    startDate;
    endDate;
    static from(dto) {
        const seasonObj = new SeasonDto();
        seasonObj.id = dto.id;
        seasonObj.name = dto.name;
        seasonObj.startDate = dto.startDate;
        seasonObj.endDate = dto.endDate;
        return seasonObj;
    }
    static create(dto) {
        // Create season dto with no id!
        const seasonObj = new SeasonDto();
        seasonObj.name = dto.name;
        seasonObj.startDate = dto.startDate;
        seasonObj.endDate = dto.endDate;
        return seasonObj;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            name: entity.name,
            startDate: entity.startDate,
            endDate: entity.endDate,
        });
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SeasonDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SeasonDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SeasonDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SeasonDto.prototype, "endDate", void 0);
exports.SeasonDto = SeasonDto;
//# sourceMappingURL=season.dto.js.map