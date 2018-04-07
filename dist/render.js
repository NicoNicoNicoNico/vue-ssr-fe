'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new Promise(function (resolve, reject) {
    resolve(app);
  });
};

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server-entry.js
var app = new _vue2.default(_App2.default);

// the default export should be a function
// which will receive the context of the render call
;