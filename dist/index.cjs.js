'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MUIButton = require('@material-ui/core/Button');
var styles = require('@material-ui/core/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MUIButton__default = /*#__PURE__*/_interopDefaultLegacy(MUIButton);

var useStyles = styles.makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            color: 'blue'
        }
    },
});
function PrimaryButton(_a) {
    var children = _a.children, disabled = _a.disabled;
    var classes = useStyles();
    return React__default['default'].createElement(MUIButton__default['default'], { className: classes.root, disabled: disabled, variant: "outlined" }, children);
}
function SecondaryButton(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return React__default['default'].createElement(MUIButton__default['default'], { color: "secondary", disabled: disabled }, children);
}

exports.PrimaryButton = PrimaryButton;
exports.SecondaryButton = SecondaryButton;
