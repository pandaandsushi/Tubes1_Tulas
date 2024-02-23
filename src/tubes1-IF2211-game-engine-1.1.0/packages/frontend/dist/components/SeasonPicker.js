"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useSeasons_1 = __importDefault(require("../hooks/useSeasons"));
const Inputs_1 = require("./Inputs");
exports.SeasonPicker = (0, react_1.memo)((props) => {
    const seasons = (0, useSeasons_1.default)();
    const { seasonId, onChange } = props;
    return ((0, jsx_runtime_1.jsx)(Inputs_1.Select, { label: "Select season", onChange: onChange, options: seasons.map((season) => {
            return { label: season.name, value: season.id };
        }), value: seasonId }));
});
//# sourceMappingURL=SeasonPicker.js.map