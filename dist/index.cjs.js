'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function PrimaryButton(_a) {
    var children = _a.children;
    return React__default['default'].createElement("button", null, children);
}
function SecondaryButton(_a) {
    var children = _a.children;
    return React__default['default'].createElement("button", { style: { background: 'purple' } },
        " ",
        children);
}

exports.PrimaryButton = PrimaryButton;
exports.SecondaryButton = SecondaryButton;
