"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
test("check result value", () => {
    let result = (0, calc_1.sum)(10, 20, 30);
    expect(result).toBe(60);
    debugger;
});
//# sourceMappingURL=calc.test.js.map