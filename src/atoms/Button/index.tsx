import React from 'react'
import MUIButton from '@material-ui/core/Button';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    disabled?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';

    children: any;
    variant: 'primary' | 'secondary';
 
    onClick?: () => void;
  }


function PrimaryButton ({children, disabled}: ButtonProps) {
    return <MUIButton color="primary" disabled={disabled} variant="outlined">{children}</MUIButton>
}

function SecondaryButton ({children, disabled = false}: ButtonProps) {
    return <MUIButton color="secondary" disabled={disabled}>{children}</MUIButton>
}

export { PrimaryButton, SecondaryButton }