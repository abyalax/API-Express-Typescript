"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logRequest = (req, res, next) => {
    console.log("Terjadi Request", req.url, req.method);
    next();
};
module.exports = logRequest;
