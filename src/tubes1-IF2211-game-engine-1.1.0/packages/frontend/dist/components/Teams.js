"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useFetch_1 = __importDefault(require("../hooks/useFetch"));
const useTeams_1 = __importDefault(require("../hooks/useTeams"));
const HighScoreTable_1 = require("./HighScoreTable");
const MovingBot_1 = require("./MovingBot");
const Table_1 = require("./Table");
const Teams = () => {
    const teams = (0, useTeams_1.default)();
    const { response: currentSeason } = (0, useFetch_1.default)('api/seasons/current', '0');
    const offSeasonId = '00000000-0000-0000-0000-000000000000';
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center mx-auto mt-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-10", children: (0, jsx_runtime_1.jsx)(Table_1.Table, { label: "Teams", cols: ['Name', 'Abbreviation', 'Icon'], data: teams.map((team) => {
                                    return {
                                        name: team.name,
                                        abbreviation: team.abbreviation,
                                        icon: (0, jsx_runtime_1.jsx)("img", { src: team.logotypeUrl, alt: "school-logo" }),
                                    };
                                }) }) }), (0, jsx_runtime_1.jsx)(HighScoreTable_1.HighScoreTable, { seasonId: currentSeason.id ?? offSeasonId })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-20", children: (0, jsx_runtime_1.jsx)(MovingBot_1.MovingBot, {}) })] }));
};
exports.Teams = Teams;
//# sourceMappingURL=Teams.js.map