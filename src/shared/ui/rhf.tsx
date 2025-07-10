"use client";

import { useFormContext } from "react-hook-form";

import { OptionType } from "../model/common-type";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Switch } from "./switch";
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

type SelectPropsType = CommonPropsType & {
  placeholder: string;
  options: OptionType[];
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

const RHFSelect = ({ name, label, placeholder, options }: SelectPropsType) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {options.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const RHFSwitch = ({ name, className, label }: CommonPropsType) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Switch
              {...field}
              className={className}
              checked={field.value === "Y"}
              onCheckedChange={value => field.onChange(value ? "Y" : "N")}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { RHFInput, RHFTextarea, RHFSelect, RHFSwitch };
