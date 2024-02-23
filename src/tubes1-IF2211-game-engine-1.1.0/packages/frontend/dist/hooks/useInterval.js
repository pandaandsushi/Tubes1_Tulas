"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const react_1 = require("react");
function useInterval(callback, delay) {
    const savedCallback = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map