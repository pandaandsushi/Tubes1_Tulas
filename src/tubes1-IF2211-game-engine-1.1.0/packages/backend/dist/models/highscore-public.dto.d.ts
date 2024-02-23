import { IHighscoreDto } from "@etimo/diamonds2-types";
import { IHighscore } from "../types";
export declare class HighscorePublicDto implements IHighscoreDto {
    botName: string;
    score: number;
    seasonId: string;
    team: string;
    teamLogotype: string;
    static fromEntity(entity: IHighscore): HighscorePublicDto;
}
//# sourceMappingURL=highscore-public.dto.d.ts.map