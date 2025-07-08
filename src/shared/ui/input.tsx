import { ComponentProps } from "react";

import { cn } from "../lib/cn";

type PropsType = Omit<ComponentProps<"input">, "size"> & {
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  disabled?: boolean;
};
const Input = ({ size = "md", rounded = "md", className, disabled, ...props }: PropsType) => {
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

  const defaultClassName =
    "bg-gray-100 focus:outline-gray-300 ring-1 ring-gray-200 hover:ring-gray-300";
  const inputClassName = cn(
    defaultClassName,
    sizeMap[size],
    roundedMap[rounded],
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  return <input {...props} className={inputClassName} disabled={disabled} />;
};
export { Input };
