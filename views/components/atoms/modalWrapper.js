"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// modules
var ModalWrapper = function ModalWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: props.open
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children));
};

exports.ModalWrapper = ModalWrapper;