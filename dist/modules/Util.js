"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    // shuffles an array
    static shuffle(items) {
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = items[i];
            items[i] = items[j];
            items[j] = items[i];
        }
    }
    // performs ormap on an array
    static ormap(items, pred) {
        return !items.every((item) => {
            return !pred(item);
        });
    }
}
exports.Util = Util;
_a = Util;
// sleepUntil, sourced from online
Util.sleepUntil = (fn) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const wait = setInterval(function () {
            if (fn()) {
                clearInterval(wait);
                resolve();
            }
        }, 20);
    });
});
//# sourceMappingURL=Util.js.map