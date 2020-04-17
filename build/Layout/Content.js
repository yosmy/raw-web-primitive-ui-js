"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Container = require("../Container");

var _templateObject;

var _excluded = ["gradient", "scroll", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Content = function Content(_ref) {
  var gradient = _ref.gradient,
      scroll = _ref.scroll,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.flow;
  delete props.align;
  delete props.margin;
  delete props.padding;
  delete props.width;
  delete props.height;
  delete props.background;
  return /*#__PURE__*/_react["default"].createElement("div", props, children);
};

Content.propTypes = _primitiveUiSpec.Layout.Content.Props;
var StyledContent = (0, _style.styled)(Content)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    \n    ", "\n"])), function (props) {
  return (0, _Container.compileFlow)(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
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
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background);
});
var _default = StyledContent;
exports["default"] = _default;