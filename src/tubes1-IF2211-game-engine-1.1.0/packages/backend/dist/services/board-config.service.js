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
exports.BoardConfigService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const seasons_service_1 = require("./seasons.service");
let BoardConfigService = class BoardConfigService {
    seasonsService;
    repo;
    constructor(seasonsService, repo) {
        this.seasonsService = seasonsService;
        this.repo = repo;
    }
    async getCurrentBoardConfig() {
        const season = await this.seasonsService.getCurrentSeason();
        return this.repo.getBoardConfigById(season.boardConfigId);
    }
    async getBoardConfig(seasonId) {
        return this.repo.getBoardConfigById(seasonId);
    }
    async add(dto) {
        return this.repo.create(dto);
    }
};
BoardConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [seasons_service_1.SeasonsService,
        db_1.BoardConfigRepository])
], BoardConfigService);
exports.BoardConfigService = BoardConfigService;
//# sourceMappingURL=board-config.service.js.map