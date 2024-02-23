import { FC } from 'react';
type SelectProps = {
    label: string;
    value: number | string;
    options: {
        label: string;
        value: string;
    }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export declare const Select: FC<SelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map