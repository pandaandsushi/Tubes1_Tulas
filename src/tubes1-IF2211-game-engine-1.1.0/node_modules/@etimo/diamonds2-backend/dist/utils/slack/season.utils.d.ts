export declare const getSeasonListBody: (trigger_id: any, seasons: any) => {
    trigger_id: any;
    view: {
        type: string;
        callback_id: string;
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
            accessory: {
                type: string;
                action_id: string;
                text: {
                    type: string;
                    text: string;
                };
                style: string;
                value: string;
            };
            elements?: undefined;
        } | {
            type: string;
            elements: {
                type: string;
                text: string;
            }[];
            text?: undefined;
            accessory?: undefined;
        } | {
            type: string;
            text?: undefined;
            accessory?: undefined;
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
export declare const getAddSeasonBody: (trigger_id: any) => {
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
        blocks: ({
            type: string;
            block_id: string;
            element: {
                type: string;
                initial_date?: undefined;
                placeholder?: undefined;
                initial_value?: undefined;
            };
            label: {
                type: string;
                text: string;
                emoji: boolean;
            };
        } | {
            type: string;
            block_id: string;
            element: {
                type: string;
                initial_date: string;
                placeholder: {
                    type: string;
                    text: string;
                    emoji: boolean;
                };
                initial_value?: undefined;
            };
            label: {
                type: string;
                text: string;
                emoji: boolean;
            };
        } | {
            type: string;
            block_id: string;
            element: {
                type: string;
                initial_value: string;
                initial_date?: undefined;
                placeholder?: undefined;
            };
            label: {
                type: string;
                text: string;
                emoji: boolean;
            };
        })[];
    };
};
//# sourceMappingURL=season.utils.d.ts.map