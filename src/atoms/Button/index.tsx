import React from 'react'

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';

    children: any;
 
    onClick?: () => void;
  }


function PrimaryButton ({children}: ButtonProps) {
    return <button>{children}</button>
}

function SecondaryButton ({children}: ButtonProps) {
    return <button style={{background: 'blue', padding:'18px', borderRadius: '5px', border: 'none', color: 'white'}}>{children}</button>
}

export { PrimaryButton, SecondaryButton }