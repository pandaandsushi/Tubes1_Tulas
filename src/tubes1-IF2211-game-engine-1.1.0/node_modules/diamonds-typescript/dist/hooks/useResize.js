"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useResize = (options = {}) => {
    const containerRef = (0, react_1.useRef)(null);
    const [maxWidth, setMaxWidth] = (0, react_1.useState)({
        maxWidth: '100%',
    });
    const callbackFunction = (entries) => {
        const [entry] = entries;
        const parent = entry.target.parentElement;
        if (!parent)
            return;
        if (parent.offsetWidth > parent.offsetHeight) {
            setMaxWidth({
                maxWidth: `${parent.offsetHeight * 0.95}px`,
            });
        }
        else {
            setMaxWidth({
                maxWidth: `${parent.offsetWidth}px`,
            });
        }
    };
    (0, react_1.useEffect)(() => {
        const observer = new ResizeObserver(callbackFunction);
        if (containerRef.current)
            observer.observe(containerRef.current);
        return () => {
            if (containerRef.current)
                observer.unobserve(containerRef.current);
        };
    }, [containerRef, options]);
    return [containerRef, maxWidth];
};
exports.default = useResize;
//# sourceMappingURL=useResize.js.map