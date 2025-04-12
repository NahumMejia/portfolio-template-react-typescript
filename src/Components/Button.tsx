import { ButtonHTMLAttributes } from 'react';

export default function Button({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={` ` + className}
            disabled={disabled}
        >
            {children}
        </button>
    );
}