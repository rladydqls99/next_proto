import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import Link from "next/link";

import { navItems } from "@/shared";

const SideNav = () => {
  return (
    <Accordion.Root
      type="multiple"
      className="bg-primary-hover min-w-54 space-y-5 px-5 py-10 text-white"
    >
      {navItems.map(item => (
        <Accordion.Item key={item.key} value={item.key}>
          <Accordion.Header>
            <Accordion.Trigger
              className="group flex w-full cursor-pointer items-center gap-2 hover:text-indigo-100 disabled:cursor-not-allowed disabled:text-white disabled:opacity-50"
              disabled={item.disabled}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
              <ChevronDownIcon
                aria-hidden
                className="ml-auto transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_300ms_ease-out] data-[state=open]:animate-[accordion-down_300ms_ease-out]">
            <div className="space-y-2 py-2 pl-7">
              {item.children.map(child => (
                <Link
                  key={child.key}
                  href={child.href ?? ""}
                  className="block text-sm hover:text-indigo-200"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default SideNav;
