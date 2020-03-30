"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchBtn = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _top = require("../pages/top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  && {\n    color: #555;\n    font-size: 2rem;\n    transform: rotate(", ");\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    min-width: 45px;\n    min-height: 45px;\n    padding: 0;\n    border-radius: 30px;\n    opacity: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchBtn = function SwitchBtn(props) {
  var _useContext = (0, _react.useContext)(_top.ctx),
      displayPeriod = _useContext.displayPeriod,
      setDisplayPeriod = _useContext.setDisplayPeriod,
      thisYear = _useContext.thisYear,
      thisMonth = _useContext.thisMonth;

  var displayMonth = displayPeriod.displayMonth,
      displayYear = displayPeriod.displayYear;
  var disabled = false;

  if (displayYear === thisYear && displayMonth === thisMonth && props.switchTo === 'next') {
    disabled = true;
  }

  var handleSwitch = function handleSwitch() {
    var year = displayYear;
    var month = displayMonth;

    if (props.switchTo === 'prev') {
      if (displayMonth === 1) {
        month = 12;
        year--;
      } else {
        month--;
      }
    } else {
      if (displayMonth === 12) {
        month = 1;
        year++;
      } else {
        month++;
      }
    }

    ;
    setDisplayPeriod({
      displayYear: year,
      displayMonth: month
    });
  };

  return /*#__PURE__*/_react.default.createElement(StyledButton, {
    onClick: handleSwitch,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(StyledIcon, {
    direction: props.switchTo
  }));
};

exports.SwitchBtn = SwitchBtn;
var StyledButton = (0, _styledComponents.default)(_Button.default)(_templateObject(), function (props) {
  return props.disabled ? .4 : 1;
});
var StyledIcon = (0, _styledComponents.default)(_KeyboardArrowDown.default)(_templateObject2(), function (props) {
  return props.direction === 'prev' ? '90deg' : '-90deg';
});