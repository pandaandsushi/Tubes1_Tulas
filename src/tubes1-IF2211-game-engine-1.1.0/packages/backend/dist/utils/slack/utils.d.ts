export declare const showModal: (view: any, type?: string) => Promise<void>;
export declare const getSlackHeaders: () => {
    "Content-type": string;
    Authorization: string;
};
export declare const slackError: (errorTag: any, message: any) => {
    response_action: string;
    errors: {
        [x: number]: any;
    };
};
export declare const offSeasonId = "00000000-0000-0000-0000-000000000000";
//# sourceMappingURL=utils.d.ts.map