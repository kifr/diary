"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Days = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _day = require("../atoms/day");

var _top = require("../pages/top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Month;

(function (Month) {
  Month[Month["Jan."] = 1] = "Jan.";
  Month[Month["Feb."] = 2] = "Feb.";
  Month[Month["Mar."] = 3] = "Mar.";
  Month[Month["Apr."] = 4] = "Apr.";
  Month[Month["May."] = 5] = "May.";
  Month[Month["Jun."] = 6] = "Jun.";
  Month[Month["Jul."] = 7] = "Jul.";
  Month[Month["Aug."] = 8] = "Aug.";
  Month[Month["Sep."] = 9] = "Sep.";
  Month[Month["Oct."] = 10] = "Oct.";
  Month[Month["Nov."] = 11] = "Nov.";
  Month[Month["Dec."] = 12] = "Dec.";
})(Month || (Month = {}));

var Days = function Days() {
  var _useContext = (0, _react.useContext)(_top.ctx),
      displayPeriod = _useContext.displayPeriod,
      thisYear = _useContext.thisYear,
      thisMonth = _useContext.thisMonth,
      today = _useContext.today;

  var displayMonth = displayPeriod.displayMonth,
      displayYear = displayPeriod.displayYear;
  var displayDates = new Date(displayYear, displayMonth, 0).getDate();
  var startDay = new Date(displayYear, displayMonth - 1).getDay();

  var createDayObj = function createDayObj(RequestMonth, RequestDate) {
    // TODO: implement fetch functions;
    // TODO: enumの範疇を超えた場合にundefinedになる問題を解決
    var targetMonth;
    if (RequestMonth === 0) targetMonth = 12;else if (RequestMonth === 13) targetMonth = 1;else targetMonth = RequestMonth;
    var isToday = false;

    if (thisYear === displayYear && thisMonth === displayMonth && RequestDate === today) {
      isToday = true;
    }

    var day = {
      month: Month[targetMonth],
      isdisplayMonth: RequestMonth === displayMonth ? true : false,
      isFirstDay: RequestDate === 1 ? true : false,
      date: RequestDate,
      isToday: isToday,
      title: 'aaaa',
      // fetch via API
      body: 'bbbb' // fetch via API

    };
    return day;
  };

  var calendar = [];
  var index = 0; // prev month

  var prevMonthDates = new Date(displayYear, displayMonth - 1, 0).getDate();
  var prevMonthStartDate = prevMonthDates - (startDay - 1);

  for (var i = 0; i < startDay; i++) {
    calendar[index] = createDayObj(displayMonth - 1, prevMonthStartDate + i);
    index++;
  } // crr month


  for (var _i = 1; _i <= displayDates; _i++) {
    calendar[index] = createDayObj(displayMonth, _i);
    index++;
  } // next month


  var displayMonthWeeks = Math.ceil((startDay + displayDates) / 7);
  var restDays = displayMonthWeeks * 7 - calendar.length;

  for (var _i2 = 1; _i2 <= restDays; _i2++) {
    calendar[index] = createDayObj(displayMonth + 1, _i2);
    index++;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledUl, null, calendar.map(function (day, i) {
    if (i === 0) day.isFirstDay = true;
    return /*#__PURE__*/_react.default.createElement(_day.Day, {
      key: i,
      month: day.month,
      isdisplayMonth: day.isdisplayMonth,
      date: day.date,
      isFirstDay: day.isFirstDay,
      isToday: day.isToday,
      title: day.title,
      body: day.body
    });
  })));
};

exports.Days = Days;

var StyledUl = _styledComponents.default.ul(_templateObject());