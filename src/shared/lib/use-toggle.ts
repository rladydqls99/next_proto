"use client";

import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => setIsOpen(prev => !prev);

  return { isOpen, toggle };
};
