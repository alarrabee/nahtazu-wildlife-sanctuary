"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
var formatDate = function (date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};
exports.formatDate = formatDate;
