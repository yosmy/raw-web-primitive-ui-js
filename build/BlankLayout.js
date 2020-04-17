"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Content = _interopRequireDefault(require("./Layout/Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlankLayout = function BlankLayout(_ref) {
  var align = _ref.align,
      padding = _ref.padding,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Content["default"], {
    align: align,
    padding: padding
  }, children);
};

BlankLayout.propTypes = _primitiveUiSpec.BlankLayout.Props;
var _default = BlankLayout;
exports["default"] = _default;