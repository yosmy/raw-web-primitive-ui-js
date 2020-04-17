"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CirclePlaceholder = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _reactContentLoader = _interopRequireDefault(require("react-content-loader"));

var _templateObject;

var _excluded = ["size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CirclePlaceholder = function CirclePlaceholder(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.margin;
  return /*#__PURE__*/_react["default"].createElement(_reactContentLoader["default"], _extends({
    width: size,
    height: size
  }, props), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2
  }));
};

exports.CirclePlaceholder = CirclePlaceholder;
CirclePlaceholder.propTypes = _primitiveUiSpec.CirclePlaceholder.Props;
CirclePlaceholder.defaultProps = {
  size: 50
};
var StyledCirclePlaceholder = (0, _style.styled)(CirclePlaceholder)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
});
var _default = StyledCirclePlaceholder;
exports["default"] = _default;