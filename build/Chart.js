"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _victory = require("victory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Chart = function Chart(_ref) {
  var data = _ref.data,
      xAxis = _ref.xAxis,
      lines = _ref.lines;
  return /*#__PURE__*/_react["default"].createElement(_victory.VictoryChart, {
    containerComponent: /*#__PURE__*/_react["default"].createElement(_victory.VictoryVoronoiContainer, {
      labels: function labels(_ref2) {
        var datum = _ref2.datum;
        return "".concat(xAxis.name.toLowerCase(), " ").concat(datum[xAxis.key], ", ").concat(datum[lines[0].key], " ").concat(lines[0].unit);
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_victory.VictoryLine, {
    style: {
      data: {
        stroke: lines[0].stroke
      },
      parent: {
        border: "1px solid #ccc"
      }
    },
    data: data,
    x: xAxis.key,
    y: lines[0].key
  }), /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    tickValues: Array.from({
      length: xAxis.tick - 1
    }, function (v, i) {
      return i + 1;
    })
  }), /*#__PURE__*/_react["default"].createElement(_victory.VictoryAxis, {
    dependentAxis: true,
    tickFormat: function tickFormat(t) {
      return "".concat(Math.round(t));
    }
  }));
};

Chart.propTypes = {
  data: _propTypes["default"].array,
  xAxis: _propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    key: _propTypes["default"].string.isRequired,
    tick: _propTypes["default"].number.isRequired
  }).isRequired,
  lines: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    key: _propTypes["default"].string.isRequired,
    unit: _propTypes["default"].string,
    stroke: _propTypes["default"].string
  }).isRequired)
};
var _default = Chart;
exports["default"] = _default;