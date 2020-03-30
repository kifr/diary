"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// idがappの部分をhydrateで描画する
(0, _reactDom.hydrate)( /*#__PURE__*/_react.default.createElement(_App.default, null), document.querySelector('#root'));