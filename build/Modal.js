"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

var _templateObject;

var _excluded = ["width", "height", "full", "onClose", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Modal = function Modal(_ref) {
  var width = _ref.width,
      height = _ref.height,
      full = _ref.full,
      onClose = _ref.onClose,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.flow;
  delete props.align;
  delete props.flex;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.background;
  var style;

  if (!full) {
    style = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.80)'
      },
      content: {
        top: "50%",
        left: "50%",
        width: width,
        height: height,
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
  }

  return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], _extends({
    isOpen: true,
    onRequestClose: onClose,
    ariaHideApp: false // Needed to avoid a warning related to screen readers
    ,
    className: props.className,
    style: style
  }, props), children);
};

Modal.propTypes = _primitiveUiSpec.Modal.Props;
var StyledModal = (0, _style.styled)(Modal)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: auto;\n    outline: none;\n\n    ", "\n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileFlow(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileFlex(props.flex);
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
});
var _default = StyledModal;
exports["default"] = _default;