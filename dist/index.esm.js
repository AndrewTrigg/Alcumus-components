import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

var useStyles = makeStyles({
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
    return React.createElement(MUIButton, { className: classes.root, disabled: disabled, variant: "outlined" }, children);
}
function SecondaryButton(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return React.createElement(MUIButton, { color: "secondary", disabled: disabled }, children);
}

export { PrimaryButton, SecondaryButton };
