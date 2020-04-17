"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Container = require("./Container");

var _templateObject;

var _excluded = ["upload", "onClick", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var upload = _ref.upload,
      onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.flow;
  delete props.align;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.background;
  delete props.width;
  delete props.height;
  var ref = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    onClick: !upload ? function () {
      onClick();
    } : function () {
      ref.current.click();
    }
  }, props), upload && /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    ref: ref,
    onChange: function onChange(event) {
      var fileUploaded = event.target.files[0];
      onClick(fileUploaded);
    },
    style: {
      display: 'none'
    }
  }), children);
};

Button.propTypes = _primitiveUiSpec.Button.Props;
var StyledButton = (0, _style.styled)(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    ", "\n    \n    ", "\n\n    ", "\n    ", "\n\n    ", "\n"])), function (props) {
  return (0, _Container.compileFlow)(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align) || _primitiveUiSpec.Container.compileAlign({
    main: "center",
    cross: "center"
  });
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border) || _primitiveUiSpec.Container.compileBorderWidth(0);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border) || _primitiveUiSpec.Container.compileBorderStyle({
    style: "solid"
  });
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background) || _primitiveUiSpec.Container.compileBackground("transparent");
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
}, function (props) {
  return (0, _Container.compileOnClick)(props.onClick);
});
var _default = StyledButton;
exports["default"] = _default;