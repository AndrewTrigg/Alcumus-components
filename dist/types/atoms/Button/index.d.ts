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
    label: string;
    children: any;
    onClick?: () => void;
}
declare function PrimaryButton({ children }: ButtonProps): JSX.Element;
declare function SecondaryButton({ children }: ButtonProps): JSX.Element;
export { PrimaryButton, SecondaryButton };
