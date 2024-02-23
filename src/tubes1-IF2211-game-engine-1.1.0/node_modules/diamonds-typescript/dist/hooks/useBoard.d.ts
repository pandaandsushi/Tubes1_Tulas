import { BotGameObjectProperties, IGameObjectDto } from '@etimo/diamonds2-types';
export declare const useBoard: (boardId: number, delay: number) => {
    board: GameBoard;
    bots: BotGameObjectProperties[];
};
export interface GameBoard {
    width: number;
    height: number;
    grid: IGameObjectDto[][][];
}
//# sourceMappingURL=useBoard.d.ts.map