"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Day = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Subject = _interopRequireDefault(require("@material-ui/icons/Subject"));

var _top = require("../pages/top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  && {\n    color: #555;\n    font-size: 2rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  && {\n    color: #555;\n    font-size: 2rem;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 1%;\n  right: 10%;\n  font-size: 1rem;\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 1%;\n  left: 10%;\n  font-size: 1rem;\n  color: red;\n  text-transform: initial;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  && {\n    background-color: ", ";\n    border-radius: 3px;\n    width: 100%;\n    height: 80px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% / 7);\n  position: relative;\n  padding: 2px;\n  box-sizing: border-box;\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Day = function Day(props) {
  var _useContext = (0, _react.useContext)(_top.ctx),
      setEditOpen = _useContext.setEditOpen,
      displayPeriod = _useContext.displayPeriod,
      setDisplayDate = _useContext.setDisplayDate;

  var displayMonth = displayPeriod.displayMonth;

  var handleDiaryEdit = function handleDiaryEdit(date) {
    setDisplayDate("".concat(displayMonth, "-").concat(date));
    setEditOpen(true);
  };

  return /*#__PURE__*/_react.default.createElement(StyledLi, {
    isdisplayMonth: props.isdisplayMonth
  }, /*#__PURE__*/_react.default.createElement(StyledButton, {
    title: props.title,
    onClick: function onClick() {
      return handleDiaryEdit(props.date);
    }
  }, props.isFirstDay && /*#__PURE__*/_react.default.createElement(StyledMonth, null, props.month), /*#__PURE__*/_react.default.createElement(StyledDate, {
    isToday: props.isToday
  }, props.date), props.title ? /*#__PURE__*/_react.default.createElement(StyledSubjectIcon, {
    className: "dayIcon"
  }) : /*#__PURE__*/_react.default.createElement(StyledAddIcon, {
    className: "dayIcon"
  })));
};

exports.Day = Day;

var StyledLi = _styledComponents.default.li(_templateObject(), function (props) {
  return props.isdisplayMonth ? 1 : .4;
});

var StyledButton = (0, _styledComponents.default)(_Button.default)(_templateObject2(), function (props) {
  return props.title ? '#fefefe' : '#ddd';
});

var StyledMonth = _styledComponents.default.span(_templateObject3());

var StyledDate = _styledComponents.default.span(_templateObject4(), function (props) {
  return props.isToday ? "bold" : "normal";
}, function (props) {
  return props.isToday ? "#f00" : "#555";
});

var StyledSubjectIcon = (0, _styledComponents.default)(_Subject.default)(_templateObject5());
var StyledAddIcon = (0, _styledComponents.default)(_Add.default)(_templateObject6());