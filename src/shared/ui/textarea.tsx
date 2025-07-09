import { ComponentProps } from "react";

import { cn } from "../lib/cn";

type PropsType = Omit<ComponentProps<"textarea">, "size"> & {
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  disabled?: boolean;
};

const Textarea = ({ size = "md", rounded = "md", className, disabled, ...props }: PropsType) => {
  const sizeMap = {
    xs: "px-2 py-1 text-xs min-h-16",
    sm: "px-3 py-2 text-sm min-h-20",
    md: "px-4 py-2 text-md min-h-24",
    lg: "px-5 py-3 text-lg min-h-28",
  };

  const roundedMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const defaultClassName =
    "bg-gray-100 focus:outline-gray-300 ring-1 ring-gray-200 hover:ring-gray-300 resize-none field-sizing-content";
  const invalidClassName = "aria-invalid:ring-destructive/70 aria-invalid:bg-white";

  const textareaClassName = cn(
    defaultClassName,
    invalidClassName,
    sizeMap[size],
    roundedMap[rounded],
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  return <textarea {...props} className={textareaClassName} disabled={disabled} />;
};

export { Textarea };
