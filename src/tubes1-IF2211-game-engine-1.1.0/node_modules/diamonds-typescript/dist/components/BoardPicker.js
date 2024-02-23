"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useBoardIds_1 = require("../hooks/useBoardIds");
const Inputs_1 = require("./Inputs");
exports.BoardPicker = (0, react_1.memo)((props) => {
    const { boardId, onChange } = props;
    const ids = (0, useBoardIds_1.useBoardIds)();
    return ((0, jsx_runtime_1.jsx)(Inputs_1.Select, { label: "Select board", onChange: onChange, options: ids.map((id) => {
            return { label: id.toString(), value: id.toString() };
        }), value: boardId }));
});
//# sourceMappingURL=BoardPicker.js.map