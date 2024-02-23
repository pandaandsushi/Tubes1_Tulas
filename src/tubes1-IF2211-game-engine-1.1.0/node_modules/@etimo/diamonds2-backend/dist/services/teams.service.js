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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const url_1 = require("url");
const db_1 = require("../db");
const errors_1 = require("../errors");
let TeamsService = class TeamsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async all() {
        return this.repo.all();
    }
    async add(data) {
        await this.validateInput(data);
        return await this.create(data);
    }
    async getByAbbreviation(abbreviation) {
        let team = this.repo.getByAbbreviation(abbreviation);
        if (team) {
            return team;
        }
        throw new errors_1.NotFoundError("Team does not exist");
    }
    async create(data) {
        return await this.repo.create(data);
    }
    async validateInput(data) {
        if (!data.name || !data.abbreviation || !data.logotypeUrl) {
            throw new errors_1.ForbiddenError("The body does not contain name, abbreviation or logotypeUrl.", "team_name");
        }
        // Check if name, abbreviation or url already exist.
        // Separate checks to return proper error.
        let [nameExists, abbreviationExists, logotypeUrlExists] = await Promise.all([
            this.repo.get("name", data.name),
            this.repo.get("abbreviation", data.abbreviation),
            this.repo.get("logotypeUrl", data.logotypeUrl),
        ]);
        const errorPayload = this.getErrorPayload(nameExists, abbreviationExists, logotypeUrlExists);
        if (errorPayload) {
            throw new errors_1.ConflictError(errorPayload.message, errorPayload.errorTag);
        }
        if (!this.isValidUrl(data.logotypeUrl)) {
            throw new errors_1.ForbiddenError("Invalid url", "team_logotype_url");
        }
    }
    getErrorPayload(nameExists, abbreviationExists, logotypeUrlExists) {
        if (nameExists) {
            return { message: "Name does already exist", errorTag: "team_name" };
        }
        if (abbreviationExists) {
            return {
                message: "Abbreviation does already exist",
                errorTag: "team_abbreviation",
            };
        }
        if (logotypeUrlExists) {
            return {
                message: "LogotypeUrl does already exist",
                errorTag: "team_logotype_url",
            };
        }
        return false;
    }
    isValidUrl(url) {
        try {
            new url_1.URL(url);
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_1.TeamsRepository])
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map