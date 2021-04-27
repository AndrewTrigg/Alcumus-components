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
declare function PrimaryButton({ children, disabled }: ButtonProps): JSX.Element;
declare function SecondaryButton({ children, disabled }: ButtonProps): JSX.Element;
export { PrimaryButton, SecondaryButton };
