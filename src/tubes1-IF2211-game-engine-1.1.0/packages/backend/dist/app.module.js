"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const db_1 = require("./db");
const logger_1 = require("./logger");
const services_1 = require("./services");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            controllers_1.BoardsController,
            controllers_1.BotsController,
            controllers_1.HighscoresController,
            controllers_1.RecordingsController,
            controllers_1.SeasonsController,
            controllers_1.SlackController,
            controllers_1.TeamsController,
        ],
        providers: [
            services_1.PrismaService,
            services_1.BoardsService,
            services_1.HighscoresService,
            services_1.BotsService,
            services_1.RecordingsService,
            services_1.SeasonsService,
            services_1.SlackService,
            services_1.TeamsService,
            services_1.BoardConfigService,
            logger_1.CustomLogger,
            db_1.HighscoresRepository,
            db_1.RecordingsRepository,
            db_1.SeasonsRepository,
            db_1.TeamsRepository,
            db_1.BoardConfigRepository,
            db_1.BotRegistrationsRepository,
            services_1.AuthorizationService,
            {
                provide: "NUMBER_OF_BOARDS",
                useValue: 1,
            },
            {
                provide: "MAX_EPHEMERAL_BOARDS",
                useValue: 9,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map