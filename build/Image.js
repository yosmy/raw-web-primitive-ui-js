"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Image = function Image(_ref) {
  var source = _ref.source,
      resize = _ref.resize,
      onClick = _ref.onClick,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["source", "resize", "onClick", "style"]);

  delete props.flow;
  delete props.align;
  delete props.margin;
  delete props.border;
  delete props.width;
  delete props.height;
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: source,
    alt: "",
    style: style
  });
};

Image.propTypes = _primitiveUiSpec.Image.Props;
var StyledImage = (0, _style.styled)(Image)(_templateObject(), function (props) {
  return _primitiveUiSpec.Container.compileFlex(props.flex);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
});
var _default = StyledImage;
exports["default"] = _default;