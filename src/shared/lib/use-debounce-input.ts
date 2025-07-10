"use client";

import { debounce } from "es-toolkit";
import { useEffect, useMemo, useState } from "react";

export const useDebounceInput = () => {
  const [value, setValue] = useState("");
  const [visibleValue, setVisibleValue] = useState("");

  const debouncedSetValue = useMemo(() => debounce(setValue, 500), [setValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setVisibleValue(newValue);
    debouncedSetValue(newValue);
  };

  useEffect(() => {
    return () => {
      debouncedSetValue.cancel();
    };
  }, [debouncedSetValue]);

  return { value, visibleValue, handleChange };
};
