"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rules = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useBoardConfig_1 = require("../hooks/useBoardConfig");
const useFetch_1 = __importDefault(require("../hooks/useFetch"));
const Modal_1 = __importDefault(require("./Modal"));
const Spinner_1 = require("./Spinner");
const setOnOff = (state) => (state ? 'On' : 'Off');
exports.Rules = (0, react_1.memo)((props) => {
    const { visible, seasonId, onClose } = props;
    const seasonRules = (0, useBoardConfig_1.useBoardConfig)(seasonId);
    const { response: seasonInfo } = (0, useFetch_1.default)(`api/seasons/${seasonId}`, '0');
    if (!seasonRules)
        return (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {});
    const gridSize = `${seasonRules.width} x ${seasonRules.height}`;
    return visible ? ((0, jsx_runtime_1.jsxs)(Modal_1.default, { onClose: onClose, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl 3xl:text-2xl mb-3", children: "Season rules" }), seasonRules ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(RuleItem, { label: "Grid size", value: gridSize }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Delay between moves", value: seasonRules.minimumDelayBetweenMoves }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Round length", value: seasonRules.sessionLength }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Inventory size", value: seasonRules.inventorySize }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Tackling", value: setOnOff(seasonRules.canTackle) }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Teleporters", value: setOnOff(seasonRules.teleporters) }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Number of teleporters", value: seasonRules.teleporters }), (0, jsx_runtime_1.jsx)(RuleItem, { label: "Teleporter relocation time", value: seasonRules.teleportRelocation }), seasonInfo && ((0, jsx_runtime_1.jsx)(RuleItem, { label: "Season Ends", value: new Date(seasonInfo.endDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }) }))] })) : ((0, jsx_runtime_1.jsx)("p", { children: "No rules found for the selected season" }))] }), (0, jsx_runtime_1.jsx)("button", { className: "modal-button", onClick: () => onClose(), children: "x" })] })) : null;
});
exports.Rules.displayName = 'Rules';
const RuleItem = ({ label, value }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { className: "text-label mb-0", children: label }), (0, jsx_runtime_1.jsx)("p", { className: "mt-0 mb-2", children: value })] }));
//# sourceMappingURL=Rules.js.map