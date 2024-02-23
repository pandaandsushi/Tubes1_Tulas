export declare const getTeamListBody: (trigger_id: any, teams: any[]) => {
    trigger_id: any;
    view: {
        type: string;
        title: {
            type: string;
            text: string;
            emoji: boolean;
        };
        close: {
            type: string;
            text: string;
            emoji: boolean;
        };
        blocks: ({
            type: string;
            text: {
                type: string;
                text: string;
            };
            elements?: undefined;
        } | {
            type: string;
            elements: {
                type: string;
                text: string;
            }[];
            text?: undefined;
        } | {
            type: string;
            text?: undefined;
            elements?: undefined;
        } | {
            type: string;
            text: {
                type: string;
                text: string;
                emoji: boolean;
            };
        })[];
    };
};
export declare const getAddTeamBody: (trigger_id: any) => {
    trigger_id: any;
    view: {
        type: string;
        callback_id: string;
        submit: {
            type: string;
            text: string;
            emoji: boolean;
        };
        close: {
            type: string;
            text: string;
            emoji: boolean;
        };
        title: {
            type: string;
            text: string;
            emoji: boolean;
        };
        blocks: {
            type: string;
            block_id: string;
            element: {
                type: string;
                placeholder: {
                    type: string;
                    text: string;
                    emoji: boolean;
                };
            };
            label: {
                type: string;
                text: string;
                emoji: boolean;
            };
        }[];
    };
};
//# sourceMappingURL=teams.utils.d.ts.map