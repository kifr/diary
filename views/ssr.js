"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssr = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ssr = function ssr() {
  return "\n  <!DOCTYPE html>\n  <html lang=\"ja\">\n\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"../public/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"description\" content=\"Web site created using create-react-app\" />\n    <title>Diary</title>\n  </head>\n\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\">\n      ".concat((0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_App.default, null)), "\n    </div>\n    <script src=\"./client.js\"></script>\n  </body>\n\n  </html>\n");
};

exports.ssr = ssr;