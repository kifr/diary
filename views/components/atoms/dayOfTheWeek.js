"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayOfTheWeek = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% / 7);\n  padding: 15px 0;\n  color: ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DayOfTheWeek = function DayOfTheWeek() {
  return /*#__PURE__*/_react.default.createElement(StyledUl, null, /*#__PURE__*/_react.default.createElement(StyledLi, {
    color: 'red'
  }, "Sun."), /*#__PURE__*/_react.default.createElement(StyledLi, null, "Mon."), /*#__PURE__*/_react.default.createElement(StyledLi, null, "Tue."), /*#__PURE__*/_react.default.createElement(StyledLi, null, "Wed."), /*#__PURE__*/_react.default.createElement(StyledLi, null, "Thu."), /*#__PURE__*/_react.default.createElement(StyledLi, null, "Fri."), /*#__PURE__*/_react.default.createElement(StyledLi, {
    color: 'blue'
  }, "Sat."));
};

exports.DayOfTheWeek = DayOfTheWeek;

var StyledUl = _styledComponents.default.ul(_templateObject());

var StyledLi = _styledComponents.default.li(_templateObject2(), function (props) {
  return props.color ? props.color : 'inherit';
});