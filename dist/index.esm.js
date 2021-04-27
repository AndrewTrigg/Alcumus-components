import React from 'react';
import MUIButton from '@material-ui/core/Button';

function PrimaryButton(_a) {
    var children = _a.children;
    return React.createElement(MUIButton, null, children);
}
function SecondaryButton(_a) {
    var children = _a.children;
    return React.createElement("button", { style: { background: 'blue', padding: '18px', borderRadius: '5px', border: 'none', color: 'white' } }, children);
}

export { PrimaryButton, SecondaryButton };
