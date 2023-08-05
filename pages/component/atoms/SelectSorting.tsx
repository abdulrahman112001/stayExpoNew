"use client"
import React from "react";
import { Select, createStyles, rem } from "@mantine/core";
import { IconArrowsSort, IconSortDescending } from "@tabler/icons-react";
import { SelectItems } from "@mantine/core/lib/Select/SelectItems/SelectItems";




  
type selectInput_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  icon?:any
  className?:string;
  SelectType?:string;
 
};

export default function SelectSorting( {
  label,
  placeholder,
  description,
  error,
  icon,
  SelectType,
  className,
}:selectInput_TP) {
 
  return (

      <Select
        icon={<IconSortDescending />}
        placeholder={placeholder}
        radius='xl'
        my={'md'}
        data={[
          { value: "react", label: "Sort by : Check-in date" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
     ]}
      />
    
  );
}
