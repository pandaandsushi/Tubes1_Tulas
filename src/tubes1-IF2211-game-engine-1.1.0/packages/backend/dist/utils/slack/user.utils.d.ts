export declare const getWinnerListBody: (trigger_id: any, users: any[], season: any) => {
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
            text: {
                type: string;
                text: string;
                emoji: boolean;
            };
        } | {
            type: string;
            text?: undefined;
        })[];
    };
};
//# sourceMappingURL=user.utils.d.ts.map