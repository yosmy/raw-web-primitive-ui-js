"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

var _Container = _interopRequireDefault(require("./Container"));

var _templateObject;

var _excluded = ["data", "identifier", "init", "render", "header", "change", "end"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BufferList = function BufferList(_ref) {
  var data = _ref.data,
      identifier = _ref.identifier,
      init = _ref.init,
      render = _ref.render,
      header = _ref.header,
      change = _ref.change,
      end = _ref.end,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.align;
  delete props.margin;
  delete props.border;
  delete props.width;
  delete props.height;
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], props, data.map(function (item, i) {
    return render({
      item: item,
      index: i
    });
  }));
};

BufferList.propTypes = _primitiveUiSpec.BufferList.props;
var StyledBufferList = (0, _style.styled)(BufferList)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    \n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "  \n      \n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
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
var _default = StyledBufferList;
exports["default"] = _default;