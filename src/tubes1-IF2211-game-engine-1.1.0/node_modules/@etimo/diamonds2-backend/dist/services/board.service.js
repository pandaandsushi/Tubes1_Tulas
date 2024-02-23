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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BoardsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const errors_1 = require("../errors");
const gameengine_1 = require("../gameengine");
const logger_1 = require("../logger");
const board_config_service_1 = require("./board-config.service");
const bots_service_1 = require("./bots.service");
const highscores_service_1 = require("./highscores.service");
const recordings_service_1 = require("./recordings.service");
const seasons_service_1 = require("./seasons.service");
let BoardsService = BoardsService_1 = class BoardsService {
    botsService;
    seasonsService;
    recordingsService;
    boardConfigService;
    highscoresService;
    logger;
    static nextBoardId = 1;
    boards = [];
    ephemeralBoards = [];
    constructor(botsService, seasonsService, recordingsService, boardConfigService, highscoresService, logger, numberOfBoards, numEphemeralBoards) {
        this.botsService = botsService;
        this.seasonsService = seasonsService;
        this.recordingsService = recordingsService;
        this.boardConfigService = boardConfigService;
        this.highscoresService = highscoresService;
        this.logger = logger;
        this.initialize(numberOfBoards, numEphemeralBoards).then(() => {
            logger.info("Boards initialized");
        });
        // We reset id whenever this service is reinitialized
        BoardsService_1.nextBoardId = 1;
    }
    async initialize(numberOfBoards, numEphemeralBoards) {
        const boardConfig = await this.boardConfigService.getCurrentBoardConfig();
        if (!boardConfig) {
            throw new Error("No board config found");
        }
        this.boards = await this.createInMemoryBoards(numberOfBoards, boardConfig);
        this.ephemeralBoards = await this.createInMemoryBoards(numEphemeralBoards, boardConfig);
        const fixBoard = (board) => board.registerSessionFinishedCallback(async (bot) => {
            const currentSeason = await this.seasonsService.getCurrentSeason();
            // const better = await this.highscoresService.addOrUpdate({
            //   score: bot.score,
            //   seasonId: currentSeason!.id,
            //   botId: bot.botId,
            // });
            this.recordingsService.save({
                board: board.getId(),
                botId: bot.botId,
                score: bot.score,
                seasonId: currentSeason.id,
            });
        });
        this.boards.forEach(fixBoard);
        this.logger.info(`${numberOfBoards} Live board(s) initialized`);
        this.ephemeralBoards.forEach(fixBoard);
        this.logger.info(`${numEphemeralBoards} Ephmeral board(s) initialized`);
        if (this.recordingsService) {
            const sessionLength = boardConfig.sessionLength;
            const minimumDelayBetweenMoves = boardConfig.minimumDelayBetweenMoves;
            const extraFactor = 1.5;
            const maxMoves = (1000 / minimumDelayBetweenMoves) * sessionLength * extraFactor;
            this.recordingsService.setup(numberOfBoards + numEphemeralBoards, maxMoves);
        }
    }
    _getAllBoards() {
        return [...this.boards, ...this.ephemeralBoards];
    }
    /**
     * Return all boards.
     */
    getAll() {
        return this._getAllBoards().map((b) => this.getAsDto(b));
    }
    getAllMetadata() {
        return this._getAllBoards().map((b) => this.getAsMetadataDto(b));
    }
    /**
     * Return a specific board.
     * @param id The id of the board to return.
     */
    getById(id) {
        const board = this.getBoardById(id);
        if (board) {
            return this.returnAndSaveDto(board);
        }
        throw new errors_1.NotFoundError("Board not found");
    }
    /**
     *
     * @param preferredBoardId
     * @param bot
     */
    async join(botId, preferredBoardId) {
        // Check if bot exists
        const bot = await this.botsService.get(botId);
        if (!bot) {
            throw new errors_1.UnauthorizedError("Invalid bot");
        }
        // Check if bot is on any board
        this._getAllBoards().forEach((b) => {
            if (b.getBotById(botId)) {
                throw new errors_1.ConflictError("Already playing");
            }
        });
        const boardConfig = await this.boardConfigService.getCurrentBoardConfig();
        let board;
        if (boardConfig?.separateBoards) {
            // Ephemeral boards should only be used by one bot at a time so we accept no other bots
            this.logger.debug("Find ephemeral board");
            board = this.ephemeralBoards.find((board) => {
                console.log(board.getBotsCount());
                return board.getBotsCount() === 0;
            });
            if (!board) {
                throw new errors_1.ConflictError("No board available");
            }
        }
        else {
            // Join a live board
            board = this.getBoardById(preferredBoardId);
            // TODO: join another board
        }
        if (!board) {
            throw new errors_1.ConflictError("Board not found");
        }
        // Try to join
        const result = await board.enqueueJoin(bot);
        if (!result) {
            throw new errors_1.ConflictError("Board full");
        }
        this.recordingsService.reset();
        return this.returnAndSaveDto(board);
    }
    returnAndSaveDto(board) {
        const dto = this.getAsDto(board);
        const index = this._getAllBoards().findIndex((b) => b.getId() === board.getId());
        if (this.recordingsService)
            this.recordingsService.record(index, dto);
        return dto;
    }
    async move(botId, direction) {
        // Get board where the bot is located
        const board = this.getBoardFromBotId(botId);
        if (!board) {
            throw new errors_1.ForbiddenError("Bot is not playing on a board");
        }
        // Get bot to move from board
        const bot = board.getBotById(botId);
        if (!bot) {
            throw new errors_1.UnauthorizedError("Invalid botId");
        }
        // Rate limit moves
        if (this.moveIsRateLimited(board, bot)) {
            if (this.tooManyRateLimitViolations(board, bot)) {
                await board.removeBot(bot, 1);
                throw new errors_1.ConflictError(`You have been removed from the board due to more then 10 rate limit violations.`);
            }
            const delay = board.getConfig().minimumDelayBetweenMoves;
            throw new errors_1.ConflictError(`Minimum delay between moves: (${delay} ms`);
        }
        board.updateLastMove(bot);
        const result = await board.enqueueMove(bot, this.directionToDelta(direction));
        if (!result) {
            throw new errors_1.ForbiddenError("Move not legal");
        }
        const boardDto = this.returnAndSaveDto(board);
        const botName = (await this.botsService.get(botId)).name;
        const botDto = boardDto.gameObjects.find((el) => {
            return (el.type === "BotGameObject" &&
                el.properties.name === botName);
        });
        const botScore = (botDto?.properties).score;
        // console.log("========================================================");
        // console.log(
        //   "Location: packages/backend/src/services/board.service.ts at line 233",
        // );
        // console.log(`Id: ${botId}, score: ${botScore}`);
        // console.log("========================================================");
        return boardDto;
    }
    moveIsRateLimited(board, bot) {
        const lastMove = board.getLastMove(bot);
        const timeBetweenMoves = board.getConfig().minimumDelayBetweenMoves;
        const now = Date.now();
        const violation = lastMove > now - timeBetweenMoves;
        if (violation) {
            board.updateRateLimitViolations(bot);
        }
        return violation;
    }
    getBoardById(id) {
        return this._getAllBoards().find((b) => b.getId() === id);
    }
    getBoardFromBotId(botId) {
        return this._getAllBoards().find((b) => b.getBotById(botId));
    }
    /**
     * Convert a MoveDirection enum to a delta Position.
     * @param direction
     */
    directionToDelta(direction) {
        switch (direction) {
            case enums_1.MoveDirection.NORTH:
                return { x: 0, y: -1 };
            case enums_1.MoveDirection.SOUTH:
                return { x: 0, y: 1 };
            case enums_1.MoveDirection.WEST:
                return { x: -1, y: 0 };
            case enums_1.MoveDirection.EAST:
                return { x: 1, y: 0 };
            default:
                throw Error();
        }
    }
    /**
     * Convert a board to a dto.
     * @param board
     */
    getAsDto(board) {
        return {
            id: board.getId(),
            width: board.width,
            height: board.height,
            minimumDelayBetweenMoves: board.getConfig().minimumDelayBetweenMoves,
            features: board.gameObjectProviders.map((gop) => {
                return {
                    name: gop.constructor.name,
                    config: gop.config,
                };
            }),
            gameObjects: board.getAllGameObjects().map((g) => {
                return {
                    id: g.id,
                    position: g.position,
                    type: g.constructor.name,
                    properties: g.properties,
                };
            }),
        };
    }
    getAsMetadataDto(board) {
        return {
            id: board.getId(),
            width: board.width,
            height: board.height,
            minimumDelayBetweenMoves: board.getConfig().minimumDelayBetweenMoves,
            features: board.gameObjectProviders.map((gop) => {
                return {
                    name: gop.constructor.name,
                    config: gop.config,
                };
            }),
        };
    }
    /**
     * Create an example board for debugging purpose.
     */
    async createInMemoryBoards(numberOfBoards, boardConfig) {
        const providers = [
            new gameengine_1.DiamondButtonProvider(),
            new gameengine_1.BaseProvider(),
            new gameengine_1.DiamondProvider({
                generationRatio: 0.1,
                minRatioForGeneration: 0.01,
                redRatio: 0.2,
            }),
            new gameengine_1.BotProvider({
                inventorySize: boardConfig.inventorySize,
                canTackle: boardConfig.canTackle,
            }),
            new gameengine_1.TeleportProvider({
                pairs: boardConfig.teleporters,
            }),
            new gameengine_1.TeleportRelocationProvider({
                seconds: boardConfig.teleportRelocation,
            }),
        ];
        if (boardConfig.dummyBots) {
            providers.push(new gameengine_1.DummyBotProvider({
                canTackle: boardConfig.canTackle,
                inventorySize: boardConfig.inventorySize,
                count: boardConfig.dummyBots,
                prefix: "Dummy",
            }));
        }
        const ret = [];
        for (let i = 0; i < numberOfBoards; i++) {
            const board = new gameengine_1.OperationQueueBoard(BoardsService_1.nextBoardId++, boardConfig, providers, this.logger);
            ret.push(board);
        }
        return ret;
    }
    tooManyRateLimitViolations(board, bot) {
        return board.getRateLimitViolations(bot) > 10;
    }
};
BoardsService = BoardsService_1 = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __param(6, (0, common_1.Inject)("NUMBER_OF_BOARDS")),
    __param(7, (0, common_1.Inject)("MAX_EPHEMERAL_BOARDS")),
    __metadata("design:paramtypes", [bots_service_1.BotsService,
        seasons_service_1.SeasonsService,
        recordings_service_1.RecordingsService,
        board_config_service_1.BoardConfigService,
        highscores_service_1.HighscoresService,
        logger_1.CustomLogger, Number, Number])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=board.service.js.map