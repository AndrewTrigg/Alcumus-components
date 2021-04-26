import React from 'react';

function PrimaryButton(_a) {
    var children = _a.children;
    return React.createElement("button", null, children);
}
function SecondaryButton(_a) {
    var children = _a.children;
    return React.createElement("button", { style: { background: 'purple' } },
        " ",
        children);
}

export { PrimaryButton, SecondaryButton };
