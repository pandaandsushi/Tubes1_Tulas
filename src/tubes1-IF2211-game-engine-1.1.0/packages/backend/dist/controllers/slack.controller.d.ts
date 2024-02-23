import { Request } from "express";
import { AuthorizationService, SlackService } from "../services";
export declare class SlackController {
    private slackService;
    private authorizationService;
    constructor(slackService: SlackService, authorizationService: AuthorizationService);
    /**
     * Return all seasons in a slack modal.
     */
    listAllSeasons(input: {}): Promise<void>;
    /**
     * Return a slack modal to add seasons
     */
    addSeasonModal(input: {}): Promise<void>;
    /**
     * Return all teams in a slack modal.
     */
    listAllTeams(input: {}): Promise<void>;
    /**
     * Return a slack modal to add team
     */
    addTeamModal(input: {}): Promise<void>;
    /**
     * Someone has interacted with a modal on slack - Returns noting if OK, slack error if an error occured
     */
    interact(request: Request, input: {}): Promise<{
        response_action: string;
        errors: {
            [x: number]: any;
        };
    } | undefined>;
}
//# sourceMappingURL=slack.controller.d.ts.map