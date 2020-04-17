"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(_ref) {
  var start = _ref.start,
      center = _ref.center,
      end = _ref.end;
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    flow: "row",
    align: {
      main: "center",
      cross: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    flex: true,
    align: {
      cross: "flex-start"
    }
  }, start), /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    flex: true,
    align: {
      cross: "center"
    }
  }, center), /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    flex: true,
    align: {
      cross: "flex-end"
    }
  }, end));
};

Header.propTypes = {
  start: _propTypes["default"].element,
  center: _propTypes["default"].element,
  end: _propTypes["default"].element
};
var _default = Header;
exports["default"] = _default;