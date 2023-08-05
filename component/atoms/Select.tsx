import React from "react";
import { Select } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";
type selectInput_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  icon?:any
  className?:string;
  SelectType?:string;
 
};
export default function SelectNormal( {
  label,
  placeholder,
  description,
  error,
  icon,
  SelectType,
  className,
 
}:selectInput_TP) {
  return (
    <div>
      <Select
        icon={icon}
        placeholder={placeholder}
        className={className}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
}
