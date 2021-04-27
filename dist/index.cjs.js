'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MUIButton = require('@material-ui/core/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MUIButton__default = /*#__PURE__*/_interopDefaultLegacy(MUIButton);

function PrimaryButton(_a) {
    var children = _a.children, disabled = _a.disabled;
    return React__default['default'].createElement(MUIButton__default['default'], { color: "primary", disabled: disabled, variant: "outlined" }, children);
}
function SecondaryButton(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return React__default['default'].createElement(MUIButton__default['default'], { color: "secondary", disabled: disabled }, children);
}

exports.PrimaryButton = PrimaryButton;
exports.SecondaryButton = SecondaryButton;
