"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeriodController = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _period = require("../atoms/period");

var _switchBtn = require("../atoms/switchBtn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 50%;\n  margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PeriodController = function PeriodController() {
  return /*#__PURE__*/_react.default.createElement(StyledSection, null, /*#__PURE__*/_react.default.createElement(_switchBtn.SwitchBtn, {
    switchTo: "prev"
  }), /*#__PURE__*/_react.default.createElement(_period.Period, null), /*#__PURE__*/_react.default.createElement(_switchBtn.SwitchBtn, {
    switchTo: "next"
  }));
};

exports.PeriodController = PeriodController;

var StyledSection = _styledComponents.default.section(_templateObject());