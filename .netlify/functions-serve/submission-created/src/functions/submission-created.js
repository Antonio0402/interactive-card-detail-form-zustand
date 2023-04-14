var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// functions/submission-created.ts
var submission_created_exports = {};
__export(submission_created_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(submission_created_exports);
var cards = [
  {
    id: 1,
    "holder": "Jane Appleseed",
    "number": "1234567891230000",
    "month": "04",
    "year": "23",
    "cvc": "123"
  }
];
var handler = async (event, _context) => {
  if (!event.body) {
    return {
      statusCode: 406,
      body: JSON.stringify({ message: "Card payment information is incorrect" })
    };
  }
  if (event.httpMethod === "POST") {
    const { holder, number, month, year, cvc } = JSON.parse(event.body);
    const targetCard = cards.find((card) => card.holder === holder && card.number === number && card.month === month && card.year === year && card.cvc === cvc);
    if (targetCard) {
      return {
        statusCode: 202,
        body: JSON.stringify(targetCard)
      };
    }
  }
  return {
    statusCode: 406,
    body: JSON.stringify({ message: "Card payment information is not accepted" })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=submission-created.js.map
