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
exports.SlackService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const errors_1 = require("../errors");
const models_1 = require("../models");
const utils_1 = require("../utils");
const board_config_service_1 = require("./board-config.service");
const highscores_service_1 = require("./highscores.service");
const seasons_service_1 = require("./seasons.service");
const teams_service_1 = require("./teams.service");
let SlackService = class SlackService {
    seasonsService;
    teamsService;
    highscoresService;
    boardConfigService;
    constructor(seasonsService, teamsService, highscoresService, boardConfigService) {
        this.seasonsService = seasonsService;
        this.teamsService = teamsService;
        this.highscoresService = highscoresService;
        this.boardConfigService = boardConfigService;
    }
    async getAllSeasons(input) {
        const seasons = await this.seasonsService.all();
        const view = (0, utils_1.getSeasonListBody)(input.trigger_id, seasons);
        return await (0, utils_1.showModal)(view);
    }
    async getSeasonModal(input) {
        const view = (0, utils_1.getAddSeasonBody)(input.trigger_id);
        console.log(view);
        return await (0, utils_1.showModal)(view);
    }
    async getAllTeams(input) {
        const teams = await this.teamsService.all();
        const view = (0, utils_1.getTeamListBody)(input.trigger_id, teams);
        return await (0, utils_1.showModal)(view);
    }
    async getWinners(trigger_id, seasonId) {
        const users = await this.highscoresService.allBySeasonIdPrivate(seasonId, 10);
        const season = await this.seasonsService.getSeason(seasonId);
        const view = (0, utils_1.getWinnerListBody)(trigger_id, users, season);
        return await (0, utils_1.showModal)(view, "push");
    }
    async getTeamModal(input) {
        const view = (0, utils_1.getAddTeamBody)(input.trigger_id);
        return await (0, utils_1.showModal)(view);
    }
    async handleInteract(input) {
        const payload = JSON.parse(input.payload);
        // @ts-ignore
        const action = this.actions[payload.view.callback_id];
        if (!action) {
            throw new errors_1.ForbiddenError("Not a valid callback_id");
        }
        // Try/catch to catch errors and return them in slack error format.
        try {
            const obj = await action.function(payload);
            if (obj instanceof action.dto) {
                return;
            }
        }
        catch (error) {
            // @ts-ignore
            return (0, utils_1.slackError)(error.errorTag, error.message);
        }
        return (0, utils_1.slackError)(action.errorTag, "Could not process input");
    }
    async addSeason(payload) {
        const startDate = this.parseValue(payload, "start_date", "selected_date");
        const endDate = this.parseValue(payload, "end_date", "selected_date");
        const name = this.parseValue(payload, "season_name", "value");
        const inventorySize = this.parseValue(payload, "inventory_size", "value");
        const canTackle = this.parseValue(payload, "can_tackle", "value") === "true";
        const teleporters = this.parseValue(payload, "teleporters", "value");
        const teleportRelocation = this.parseValue(payload, "teleport_relocation", "value");
        const height = this.parseValue(payload, "height", "value");
        const width = this.parseValue(payload, "width", "value");
        const minimumDelayBetweenMoves = this.parseValue(payload, "minimum_delay_between_moves", "value");
        const sessionLength = this.parseValue(payload, "session_length", "value");
        const separateBoards = this.parseValue(payload, "separate_boards", "value") === "true";
        const boardConfig = {
            inventorySize,
            canTackle,
            teleporters,
            teleportRelocation,
            height,
            width,
            minimumDelayBetweenMoves,
            sessionLength,
            separateBoards,
        };
        const createdBoardConfig = await this.boardConfigService.add(boardConfig);
        const season = {
            name,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            boardConfigId: createdBoardConfig.id,
        };
        const createdSeason = await this.seasonsService.add(season);
        let seasonDto = new models_1.SeasonDto();
        seasonDto.id = createdSeason.id;
        seasonDto.name = createdSeason.name;
        seasonDto.startDate = createdSeason.startDate;
        seasonDto.endDate = createdSeason.endDate;
        return seasonDto;
    }
    async addTeam(payload) {
        const name = this.parseValue(payload, "team_name", "value");
        const abbreviation = this.parseValue(payload, "team_abbreviation", "value");
        const logotypeUrl = this.parseValue(payload, "team_logotype_url", "value");
        const team = models_1.TeamDto.create({
            name,
            abbreviation,
            id: (0, uuid_1.v4)(),
            logotypeUrl,
        });
        console.log("TEAM", team);
        return await this.teamsService.add(team);
    }
    async showWinners(payload) {
        return await this.getWinners(payload.trigger_id, payload.actions[0].value);
    }
    parseValue(payload, obj, value) {
        const object = payload.view.state.values[obj], key = Object.keys(object)[0];
        return object[key][value];
    }
    actions = {
        "add-season": {
            function: this.addSeason.bind(this),
            dto: models_1.SeasonDto,
            errorTag: "season_name",
        },
        "add-team": {
            function: this.addTeam.bind(this),
            dto: models_1.TeamDto,
            errorTag: "team_name",
        },
        "show-winners": {
            function: this.showWinners.bind(this),
            dto: models_1.BotDto,
            errorTag: "show-winners",
        },
    };
};
SlackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [seasons_service_1.SeasonsService,
        teams_service_1.TeamsService,
        highscores_service_1.HighscoresService,
        board_config_service_1.BoardConfigService])
], SlackService);
exports.SlackService = SlackService;
//# sourceMappingURL=slack.service.js.map