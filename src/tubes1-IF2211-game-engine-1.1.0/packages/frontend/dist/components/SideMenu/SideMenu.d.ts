import { BotGameObjectProperties } from '@etimo/diamonds2-types';
import React, { FC } from 'react';
import { BotScoreData } from '../ScoreTable';
type SideMenuProps = {
    boardId: number;
    onBoardChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    bots: BotGameObjectProperties[];
    botScores: BotScoreData[];
};
export declare const SideMenu: FC<SideMenuProps>;
export {};
//# sourceMappingURL=SideMenu.d.ts.map