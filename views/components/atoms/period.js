"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.some");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.number.constructor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Period = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _top = require("../pages/top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// modules
// context
var fetchResult = [12019, 32019, 52019, 12020, 22020, 32020]; // fetch via API

var checkIsDiary = function checkIsDiary(targetValue) {
  return fetchResult.some(function (value) {
    return value === targetValue;
  });
};

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    container: {
      display: 'inline-flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    }
  });
});

var Period = function Period() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_top.ctx),
      displayPeriod = _useContext.displayPeriod,
      setDisplayPeriod = _useContext.setDisplayPeriod,
      thisYear = _useContext.thisYear,
      thisMonth = _useContext.thisMonth;

  var displayMonth = displayPeriod.displayMonth,
      displayYear = displayPeriod.displayYear;
  var targetMonth = displayMonth;
  var initialMonth = displayMonth;
  var targetYear = displayYear;
  var initialYear = displayYear;
  var reverse = false;
  var periods = [];

  for (var i = 0; i < 12; i++) {
    periods.push({
      value: "".concat(targetMonth, "-").concat(targetYear),
      label: "".concat(targetMonth, " / ").concat(targetYear),
      month: targetMonth,
      year: targetYear,
      isDiary: checkIsDiary(Number("".concat(targetMonth).concat(targetYear)))
    });

    if (reverse === false && (targetYear === thisYear && targetMonth === thisMonth || i === 5)) {
      reverse = true;
      targetMonth = initialMonth;
      targetYear = initialYear;
    }

    if (!reverse) {
      targetMonth++;

      if (targetMonth === 13) {
        targetMonth = 1;
        targetYear++;
      }
    } else {
      targetMonth--;

      if (targetMonth === 0) {
        targetMonth = 12;
        targetYear--;
      }
    }
  }

  periods.sort(function (a, b) {
    if (a.year > b.year) return 1;else if (a.year < b.year) return -1;else if (a.month > b.month) return 1;else if (a.month < b.month) return -1;else return 0;
  });

  var handleValue = function handleValue(value) {
    var _periods$find = periods.find(function (period) {
      return period.value === value;
    }),
        year = _periods$find.year,
        month = _periods$find.month;

    setDisplayPeriod({
      displayMonth: month,
      displayYear: year
    });
  };

  return /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement("form", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "period-label"
  }, "Period"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    id: "period-select",
    labelId: "period-label",
    value: "".concat(displayMonth, "-").concat(displayYear),
    onChange: function onChange(e) {
      return handleValue(e.target.value);
    }
  }, periods.map(function (period, i) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: i,
      value: period.value
    }, period.label);
  })))));
};

exports.Period = Period;