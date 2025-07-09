"use client";

import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";

type CommonPropsType = {
  className?: string;
  name: string;
  label: string;
};

type InputPropsType = CommonPropsType & {
  placeholder: string;
  size?: "sm" | "md" | "lg";
};

const RHFInput = ({ className, name, label, placeholder, size = "sm" }: InputPropsType) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input size={size} {...field} placeholder={placeholder} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const RHFTextarea = ({ className, name, label, placeholder, size = "sm" }: InputPropsType) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea size={size} {...field} placeholder={placeholder} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { RHFInput, RHFTextarea };
