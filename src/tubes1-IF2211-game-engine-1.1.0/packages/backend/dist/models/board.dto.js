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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const board_feature_dto_1 = __importDefault(require("./board-feature.dto"));
const game_object_dto_1 = require("./game-object.dto");
class BoardDto {
    id;
    width;
    height;
    minimumDelayBetweenMoves;
    gameObjects;
    features;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "A unique id of the board to use when querying just a specific board.",
    }),
    __metadata("design:type", Number)
], BoardDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The width of the board.",
    }),
    __metadata("design:type", Number)
], BoardDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The height of the board.",
    }),
    __metadata("design:type", Number)
], BoardDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The minimum delay (in ms) required between moves of the same bot.",
    }),
    __metadata("design:type", Number)
], BoardDto.prototype, "minimumDelayBetweenMoves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: game_object_dto_1.GameObjectDto,
        description: "All game objects currently on the board.",
    }),
    __metadata("design:type", Array)
], BoardDto.prototype, "gameObjects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: board_feature_dto_1.default,
        description: "The features that are are enabled for this board along with their configuration.",
    }),
    __metadata("design:type", Array)
], BoardDto.prototype, "features", void 0);
exports.BoardDto = BoardDto;
//# sourceMappingURL=board.dto.js.map