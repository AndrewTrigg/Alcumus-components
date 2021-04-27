'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MUIButton = require('@material-ui/core/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MUIButton__default = /*#__PURE__*/_interopDefaultLegacy(MUIButton);

function PrimaryButton(_a) {
    var children = _a.children;
    return React__default['default'].createElement(MUIButton__default['default'], null, children);
}
function SecondaryButton(_a) {
    var children = _a.children;
    return React__default['default'].createElement("button", { style: { background: 'blue', padding: '18px', borderRadius: '5px', border: 'none', color: 'white' } }, children);
}

exports.PrimaryButton = PrimaryButton;
exports.SecondaryButton = SecondaryButton;
