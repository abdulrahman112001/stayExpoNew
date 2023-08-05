"use client"
import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import Image from 'next/image';


type ServiceFeature_TP = {
    label?: string;
    description?: string;
    Icon?:any;
    className?:string;
    props?:any;
  };

export function ServiceFeature ({
    label,
    description,
    Icon,
    className,
    ...props
  }:ServiceFeature_TP) {
  return (
   
    <div className='lg:col-span-6 md:col-span-1 max-sm:col-span-1 py-5'>
        <div className="flex flex-col lg:pt-[60px] ">
        <Image  src={Icon} width={50} height={50} alt="" />
        <h6 className='text-xl font-bold py-2'>{label}</h6>
        <p className='text-lg  font-medium '>
            {description}
        </p>
        </div>
    </div>
   
  );
}
export default ServiceFeature