"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (req, res, next) => {
    return res.json().then((data) => {
    });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res, next) => {
    res.json().then((data) => {
    });
};
exports.createUser = createUser;
/**
 * res.json({
    status: 'success',
    statusCode: 200,
    message: 'Get all users',
    data: [
      {
        name: 'John Doe',
        email: '9g5zD@example.com',
      },
    ],
  });
 */
