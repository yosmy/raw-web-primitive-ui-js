"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["style", "children"]);

  delete props.flex;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.width;
  delete props.background;
  delete props.wrap;
  delete props.color;
  delete props.size;
  return /*#__PURE__*/_react["default"].createElement("p", _extends({
    style: style
  }, props), children);
};

var StyledText = (0, _style.styled)(Text)(_templateObject(), function (props) {
  return _primitiveUiSpec.Text.compileTextAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return props.border && props.border.radius && "overflow: hidden";
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background);
}, function (props) {
  return _primitiveUiSpec.Text.compileWrap(props.wrap);
}, function (props) {
  return _primitiveUiSpec.Text.compileColor(props.color);
}, function (props) {
  return _primitiveUiSpec.Text.compileSize(props.size);
});
var _default = StyledText;
exports["default"] = _default;