import { BaseGameObjectProperties, BotGameObjectProperties, DiamondGameObjectProperties, TeleportProperties } from "@etimo/diamonds2-types";
import { PositionDto } from "./position.dto";
export declare class GameObjectDto {
    type: string;
    position: PositionDto;
    properties: BotGameObjectProperties | DiamondGameObjectProperties | BaseGameObjectProperties | TeleportProperties;
}
//# sourceMappingURL=game-object.dto.d.ts.map