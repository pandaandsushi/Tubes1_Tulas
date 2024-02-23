"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const log = __importStar(require("loglevel"));
// const colors = {
//   // @ts-ignore
//   TRACE: chalk["magenta"],
//   // @ts-ignore
//   DEBUG: chalk["cyan"],
//   // @ts-ignore
//   INFO: chalk["blue"],
//   // @ts-ignore
//   WARN: chalk["yellow"],
//   // @ts-ignore
//   ERROR: chalk["red"],
// };
// prefix.reg(log);
// log.enableAll();
// // prefix.apply(log, {
// //     template: '[%t] %l (%n) static text:',
// //     levelFormatter(level) {
// //       return level.toUpperCase();
// //     },
// //     nameFormatter(name) {
// //       return name || 'global';
// //     },
// //     timestampFormatter(date) {
// //       return date.toISOString();
// //     },
// //   });
// prefix.apply(log, {
//   format(level, name, timestamp) {
//     // @ts-ignore
//     return `${chalk["gray"](`[${timestamp}]`)} ${colors[level](
//       level.toUpperCase().padEnd(8, " "),
//     )} `;
//   },
//   timestampFormatter(date) {
//     return date.toISOString();
//   },
// });
// prefix.apply(log.getLogger("critical"), {
//   format(level, name, timestamp) {
//     // @ts-ignore
//     return chalk["red"]["bold"](`[${timestamp}] ${level} ${name}:`);
//   },
// });
// export default log;
class CustomLogger {
    log(message) {
        log.debug(message);
    }
    error(message, trace) {
        log.error(message);
    }
    trace(message) {
        log.debug(message);
    }
    warn(message) {
        log.warn(message);
    }
    debug(message) {
        log.debug(message);
    }
    info(message) {
        log.info(message);
    }
    verbose(message) {
        log.debug(message);
    }
}
exports.CustomLogger = CustomLogger;
console;
//# sourceMappingURL=logger.js.map