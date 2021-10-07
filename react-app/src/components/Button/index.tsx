import React from 'react';
import { ButtonVariant } from '@Types';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`btn ${
        variant ? 'btn-' + variant : 'btn-primary'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
