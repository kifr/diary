"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiaryEdit = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _h = require("./h2");

var _styles = require("@material-ui/core/styles");

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _top = require("../pages/top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  && {\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      outline: 'none',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '3px',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  });
});

var DiaryEdit = function DiaryEdit() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_top.ctx),
      editOpen = _useContext.editOpen,
      setEditOpen = _useContext.setEditOpen,
      displayDate = _useContext.displayDate;

  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: editOpen,
    onClose: function onClose() {
      return setEditOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(StyledH2, null, displayDate.replace(/-/g, '月') + '日の日記'), /*#__PURE__*/_react.default.createElement(StyledTextField, {
    label: "Title",
    variant: "outlined",
    autoFocus: true
  }), /*#__PURE__*/_react.default.createElement(StyledTextField, {
    multiline: true,
    rows: 15,
    label: "Body",
    variant: "outlined"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setEditOpen(false);
    }
  }, "\u4FDD\u5B58\u3059\u308B")));
};

exports.DiaryEdit = DiaryEdit;
var StyledH2 = (0, _styledComponents.default)(_h.H2)(_templateObject());
var StyledTextField = (0, _styledComponents.default)(_TextField.default)(_templateObject2());