"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const db_1 = require("../db");
const errors_1 = require("../errors");
const teams_service_1 = require("./teams.service");
let BotsService = class BotsService {
    teamsService;
    repo;
    constructor(teamsService, repo) {
        this.teamsService = teamsService;
        this.repo = repo;
    }
    async add(input) {
        if ((await this.repo.getByEmail(input.email)) ||
            (await this.repo.getByName(input.name))) {
            return Promise.reject(new errors_1.ConflictError("Email and/or name already exists"));
        }
        const newBot = {
            name: input.name,
            email: input.email,
            password: input.password,
            teamId: null,
        };
        // Fetching the teamId
        if (input.team) {
            const team = await this.teamsService.getByAbbreviation(input.team);
            if (!team) {
                throw new errors_1.NotFoundError("Team not found");
            }
            newBot.teamId = team.id;
        }
        return this.create(newBot);
    }
    async get(id) {
        return this.repo.get(id);
    }
    async create(dto) {
        // Hashing password
        dto.password = await this.hashPassword(dto.password);
        return this.repo.create(dto);
    }
    async delete(dto) {
        return this.repo.delete(dto);
    }
    async getByEmailAndPassword(botRecoveryDto) {
        const existingBot = await this.repo.getByEmail(botRecoveryDto.email);
        // Don't return bots with no password
        if (existingBot && existingBot.password) {
            // Return bot if password is correct
            if (await bcrypt.compare(botRecoveryDto.password, existingBot.password)) {
                return existingBot;
            }
        }
        throw new errors_1.NotFoundError("Invalid email or password");
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
};
BotsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teams_service_1.TeamsService,
        db_1.BotRegistrationsRepository])
], BotsService);
exports.BotsService = BotsService;
//# sourceMappingURL=bots.service.js.map