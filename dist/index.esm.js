import React from 'react';
import MUIButton from '@material-ui/core/Button';

function PrimaryButton(_a) {
    var children = _a.children, disabled = _a.disabled;
    return React.createElement(MUIButton, { color: "primary", disabled: disabled, variant: "outlined" }, children);
}
function SecondaryButton(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return React.createElement(MUIButton, { color: "secondary", disabled: disabled }, children);
}

export { PrimaryButton, SecondaryButton };
