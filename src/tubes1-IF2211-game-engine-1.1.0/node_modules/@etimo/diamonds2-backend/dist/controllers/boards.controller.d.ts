import { BoardDto, BoardMetadataDto } from "../models";
import { BoardsService } from "../services";
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    /**
     * Return all boards.
     */
    findAll(): BoardMetadataDto[];
    /**
     * Return a specific board.
     *
     * @param id The id of the board.
     */
    find(id: string): BoardDto;
}
//# sourceMappingURL=boards.controller.d.ts.map