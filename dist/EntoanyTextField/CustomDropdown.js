"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CustomDropdown.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// CustomDropdown.js

// Import your CSS file for styling

var CustomDropdown = function CustomDropdown(_ref) {
  var candidates = _ref.candidates,
    onSelectCandidate = _ref.onSelectCandidate;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-list"
  }, candidates.map(function (candidate, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "dropdown-item",
      onClick: function onClick() {
        return onSelectCandidate(candidate);
      }
    }, candidate);
  }));
};
var _default = exports["default"] = CustomDropdown;