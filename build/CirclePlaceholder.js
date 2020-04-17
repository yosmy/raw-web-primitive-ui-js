"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CirclePlaceholder = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _reactContentLoader = _interopRequireDefault(require("react-content-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    \n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CirclePlaceholder = function CirclePlaceholder(_ref) {
  var style = _ref.style,
      props = _objectWithoutProperties(_ref, ["style"]);

  delete props.margin;
  delete props.width;
  delete props.height;
  return /*#__PURE__*/_react["default"].createElement(_reactContentLoader["default"], {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "25",
    cy: "25",
    r: "20"
  }));
};

exports.CirclePlaceholder = CirclePlaceholder;
CirclePlaceholder.propTypes = _primitiveUiSpec.CirclePlaceholder.Props;
var StyledCirclePlaceholder = (0, _style.styled)(CirclePlaceholder)(_templateObject(), function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
});
var _default = StyledCirclePlaceholder;
exports["default"] = _default;