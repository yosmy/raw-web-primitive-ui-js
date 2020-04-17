"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.compileOnClick = exports.compileFlow = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _templateObject;

var _excluded = ["onClick", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = (0, _react.forwardRef)(function (_ref, ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  delete props.flow;
  delete props.align;
  delete props.flex;
  delete props.margin;
  delete props.padding;
  delete props.background;
  delete props.border;
  delete props.width;
  delete props.height;
  delete props.z;
  delete props.position;
  delete props.shadow;
  delete props.scroll;
  delete props.table;
  delete props.row;
  delete props.cell;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    onClick: onClick
  }, props), children);
});

var compileFlow = function compileFlow(flow) {
  var compilation = [];

  if (flow) {
    compilation.push("display: flex;");
    compilation.push(_primitiveUiSpec.Container.compileFlow(flow));
  }

  return compilation.join("");
};

exports.compileFlow = compileFlow;

var compileOnClick = function compileOnClick(onClick) {
  var compilation = [];

  if (onClick) {
    compilation.push("cursor: pointer;");
  }

  return compilation.join("");
};

exports.compileOnClick = compileOnClick;

var compileTable = function compileTable(table) {
  if (!table) {
    return "";
  }

  return "display: table;";
};

var compileRow = function compileRow(row) {
  if (!row) {
    return "";
  }

  return "display: table-row;";
};

var compileCell = function compileCell(cell) {
  if (!cell) {
    return "";
  }

  return "display: table-cell;";
};

var StyledContainer = (0, _style.styled)(Container)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n"])), function (props) {
  return compileFlow(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileFlex(props.flex);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileZ(props.z);
}, function (props) {
  return _primitiveUiSpec.Container.compilePosition(props.position);
}, function (props) {
  return _primitiveUiSpec.Container.compileShadow(props.shadow);
}, function (props) {
  return _primitiveUiSpec.Container.compileScroll(props.scroll);
}, function (props) {
  return compileTable(props.table);
}, function (props) {
  return compileRow(props.row);
}, function (props) {
  return compileCell(props.cell);
}, function (props) {
  return compileOnClick(props.onClick);
});
var _default = StyledContainer;
exports["default"] = _default;