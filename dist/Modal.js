"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
require("./Modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Displays or hide a modal dialog.
 * 
 * @param {object} props
 * @param {boolean} props.isOpen - Whether to show the modal dialog.
 * @param {string} props.title - The title of the modal dialog.
 * @param {string|JSX.Element} props.message - The message of the modal dialog.
 * @param {function} props.onClose - The function to call when the modal dialog is closed.
 * @param {boolean} props.modalMode - The mode of the modal dialog.
 * @param {object} props.modalStyle - The style of the modal dialog.
 * @param {object} props.titleStyle - The style of the title of the modal dialog.
 * @param {object} props.messageStyle - The style of the message of the modal dialog.
 * @param {object} props.closeButtonStyle - The style of the close button of the modal dialog.
 * @param {boolean} props.isCloseButton - Whether to show the close button of the modal dialog.
 * @param {object} props.modalContainerStyle - The style of the modal container of the modal dialog.
 * @param {string} props.icon - The icon of the modal dialog. Choices: "check", "info", "warning", "error".
 * @param {object} props.iconStyle - The style of the icon of the modal dialog.
 * 
 * @return  {JSX.Element}  display the template of the modal dialog
 */
function Modal(_ref) {
  var closeButtonStyle = _ref.closeButtonStyle,
    icon = _ref.icon,
    iconStyle = _ref.iconStyle,
    isCloseButton = _ref.isCloseButton,
    isOpen = _ref.isOpen,
    message = _ref.message,
    messageStyle = _ref.messageStyle,
    modalContainerStyle = _ref.modalContainerStyle,
    modalMode = _ref.modalMode,
    modalStyle = _ref.modalStyle,
    onClose = _ref.onClose,
    title = _ref.title,
    titleStyle = _ref.titleStyle;
  var _useState = (0, _react.useState)(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (modalMode === undefined || modalMode === false) {
      if (e.target.className === "modal") onClose();
    } else if (modalMode) {
      if (e.target.className === "modalCloseButton") onClose();
    }
  };
  (0, _react.useEffect)(function () {
    setIsModalOpen(isOpen);
  }, [isOpen]);
  if (isModalOpen) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal",
      style: modalContainerStyle,
      onClick: function onClick(e) {
        return handleClick(e);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalContent",
      style: modalStyle
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalHeader",
      style: titleStyle
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "modalTitle"
    }, title), isCloseButton === undefined || isCloseButton ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faXmark,
      className: "modalCloseButton",
      style: closeButtonStyle ? closeButtonStyle : {
        color: "gray"
      },
      onClick: function onClick() {
        onClose();
      }
    }) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalBody",
      style: messageStyle
    }, icon && icon === "success" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        color: "green"
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCircleCheck
    })) : icon && icon === "error" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        color: "red"
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCircleXmark
    })) : icon && icon === "info" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        color: "lightblue"
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCircleInfo
    })) : icon && icon === "danger" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        color: "#EFCF00"
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCircleExclamation
    })) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalBodyContent"
    }, typeof message === "string" ? /*#__PURE__*/_react["default"].createElement("span", null, message) : message))));
  } else {
    return null;
  }
}
Modal.propTypes = {
  closeButtonStyle: _propTypes["default"].object,
  icon: _propTypes["default"].oneOf(["success", "warning", "error", "info"]),
  iconStyle: _propTypes["default"].object,
  isCloseButton: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool.isRequired,
  message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  messageStyle: _propTypes["default"].object,
  modalContainerStyle: _propTypes["default"].object,
  modalMode: _propTypes["default"].bool,
  modalStyle: _propTypes["default"].object,
  onClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  titleStyle: _propTypes["default"].object
};