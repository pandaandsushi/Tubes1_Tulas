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
exports.SeasonsService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
let SeasonsService = class SeasonsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getOffSeason() {
        const season = await this.repo.getById(utils_1.offSeasonId, false);
        if (!season) {
            throw new Error("Off season does not exist");
        }
        return season;
    }
    async getSeason(seasonId) {
        const season = await this.repo.getById(seasonId, true);
        if (!season) {
            throw new Error("Season does not exist");
        }
        return season;
    }
    async getCurrentSeason() {
        let currentSeason = await this.repo.getCurrentSeason();
        if (currentSeason) {
            return currentSeason;
        }
        return this.getOffSeason();
    }
    async all() {
        return this.repo.getAll();
    }
    async add(data) {
        // Return if values are missing
        if (!data.name || !data.startDate || !data.endDate) {
            throw new errors_1.ForbiddenError("The body does not contain name, startDate or endDate.", "season_name");
        }
        data.endDate.setHours(23, 59, 59, 999); // Season ends at midnight
        // Return if startDate is larger then endDate.
        if (data.startDate > data.endDate) {
            throw new errors_1.ForbiddenError("The endDate is not larger then the startDate.", "end_date");
        }
        let [dateCollision, nameExists] = await Promise.all([
            this.repo.dateCollision(data.startDate, data.endDate),
            this.repo.getByName(data.name),
        ]);
        if (dateCollision) {
            throw new errors_1.ConflictError("The selected dates collides with another season.", "start_date");
        }
        if (nameExists) {
            throw new errors_1.ConflictError("The selected name does already exist.", "season_name");
        }
        // Add the season
        return this.create(data);
    }
    async create(data) {
        return this.repo.create(data);
    }
};
SeasonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_1.SeasonsRepository])
], SeasonsService);
exports.SeasonsService = SeasonsService;
//# sourceMappingURL=seasons.service.js.map