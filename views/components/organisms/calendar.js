"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _periodController = require("../molecules/periodController");

var _dayOfTheWeek = require("../atoms/dayOfTheWeek");

var _days = require("../molecules/days");

var _diaryEdit = require("../atoms/diaryEdit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Calendar = function Calendar() {
  return /*#__PURE__*/_react.default.createElement(StyledSection, null, /*#__PURE__*/_react.default.createElement(_periodController.PeriodController, null), /*#__PURE__*/_react.default.createElement(_dayOfTheWeek.DayOfTheWeek, null), /*#__PURE__*/_react.default.createElement(_days.Days, null), /*#__PURE__*/_react.default.createElement(_diaryEdit.DiaryEdit, null));
};

exports.Calendar = Calendar;

var StyledSection = _styledComponents.default.section(_templateObject());