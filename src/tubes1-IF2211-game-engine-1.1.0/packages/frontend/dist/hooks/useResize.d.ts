/// <reference types="react" />
type Options = {
    [key: string]: any;
};
type MaxWidth = {
    maxWidth: string;
};
type UseResponsiveContainer = (options?: Options) => [React.RefObject<HTMLDivElement>, MaxWidth];
declare const useResize: UseResponsiveContainer;
export default useResize;
//# sourceMappingURL=useResize.d.ts.map