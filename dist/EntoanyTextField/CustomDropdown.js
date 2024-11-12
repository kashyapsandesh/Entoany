"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CustomDropdown.css");
<<<<<<< HEAD
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
=======
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
>>>>>>> 8622437 (version 1.0.11 publish with improvements)
// Import your CSS file for styling

var CustomDropdown = function CustomDropdown(_ref) {
  var candidates = _ref.candidates,
    onSelectCandidate = _ref.onSelectCandidate;
  var handleItemClick = function handleItemClick(candidate) {
    onSelectCandidate(candidate); // Update parent state with selected candidate
  };
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-list ".concat(candidates.length > 0 ? "open" : "")
  }, candidates.map(function (candidate, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "dropdown-item",
      onClick: function onClick() {
        return handleItemClick(candidate);
      } // Call handler with candidate
    }, candidate);
  }));
};
var _default = exports["default"] = CustomDropdown;