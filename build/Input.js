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
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(_ref) {
  var id = _ref.id,
      value = _ref.value,
      placeholder = _ref.placeholder,
      focus = _ref.focus,
      keyboard = _ref.keyboard,
      length = _ref.length,
      multi = _ref.multi,
      secure = _ref.secure,
      capitalize = _ref.capitalize,
      _onChange = _ref.onChange,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["id", "value", "placeholder", "focus", "keyboard", "length", "multi", "secure", "capitalize", "onChange", "style", "children"]);

  delete props.align;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.width;
  var type = buildType(secure);
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: type,
    value: value || '',
    style: style,
    onChange: function onChange(event) {
      _onChange(event.target.value);
    }
  });
};

Input.propTypes = _primitiveUiSpec.Input.Props;

var buildType = function buildType(secure) {
  switch (secure) {
    case true:
      return 'password';

    default:
      return 'text';
  }
};

var StyledInput = (0, _style.styled)(Input)(_templateObject(), function (props) {
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
});
var _default = StyledInput;
exports["default"] = _default;