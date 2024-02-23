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
exports.TeamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TeamDto {
    id;
    name;
    abbreviation;
    logotypeUrl;
    static from(dto) {
        const teamObj = new TeamDto();
        teamObj.id = dto.id;
        teamObj.name = dto.name;
        teamObj.abbreviation = dto.abbreviation;
        teamObj.logotypeUrl = dto.logotypeUrl;
        return teamObj;
    }
    static create(dto) {
        // Create team dto with no id!
        const teamObj = new TeamDto();
        teamObj.name = dto.name;
        teamObj.abbreviation = dto.abbreviation;
        teamObj.logotypeUrl = dto.logotypeUrl;
        return teamObj;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            name: entity.name,
            abbreviation: entity.abbreviation,
            logotypeUrl: entity.logotypeUrl,
        });
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TeamDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TeamDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TeamDto.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TeamDto.prototype, "logotypeUrl", void 0);
exports.TeamDto = TeamDto;
//# sourceMappingURL=team.dto.js.map