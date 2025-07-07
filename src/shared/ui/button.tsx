import { ComponentProps } from "react";

import { cn } from "../lib/cn";

type PropsType = ComponentProps<"button"> & {
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  loading?: boolean;
};

type ExtendedPropsType = PropsType & {
  variant?: "outline" | "filled" | "link";
};
const Button = ({
  size = "md",
  disabled = false,
  loading = false,
  className,
  children,
  rounded = "md",
  ...props
}: PropsType) => {
  const sizeMap = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-5 py-3 text-lg",
  };

  const roundedMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const buttonClassName = cn(
    sizeMap[size],
    roundedMap[rounded],
    className,
    loading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  );

  const buttonContent = loading ? "loading..." : children;

  return (
    <button {...props} className={buttonClassName} disabled={disabled || loading}>
      {buttonContent}
    </button>
  );
};

// primary button -----------------------------------------------------------------------------------

const PrimaryButton = ({ variant = "filled", className, ...props }: ExtendedPropsType) => {
  const variantMap = {
    filled: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
    outline: "ring-2 border-primary text-primary hover:bg-gray-100 active:bg-gray-200",
    link: "text-primary underline hover:text-primary-hover active:text-primary-active",
  };

  const buttonClassName = cn(variantMap[variant], className);

  return <Button {...props} className={buttonClassName} />;
};

// secondary button -----------------------------------------------------------------------------------

const SecondaryButton = ({ variant = "filled", className, ...props }: ExtendedPropsType) => {
  const variantMap = {
    filled:
      "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active",
    outline: "ring-2 border-secondary text-secondary hover:bg-gray-100 active:bg-gray-200",
    link: "text-secondary underline hover:text-secondary-hover active:text-secondary-active",
  };

  const buttonClassName = cn(variantMap[variant], className);

  return <Button {...props} className={buttonClassName} />;
};

// destructive button -----------------------------------------------------------------------------------

const DestructiveButton = ({ variant = "filled", className, ...props }: ExtendedPropsType) => {
  const variantMap = {
    filled:
      "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active",
    outline: "ring-2 border-destructive text-destructive hover:bg-gray-100 active:bg-gray-200",
    link: "text-destructive underline hover:text-destructive-hover active:text-destructive-active",
  };

  const buttonClassName = cn(variantMap[variant], className);

  return <Button {...props} className={buttonClassName} />;
};

export { Button, PrimaryButton, SecondaryButton, DestructiveButton };
