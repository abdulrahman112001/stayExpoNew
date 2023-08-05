"use client"
import { Image, Text, Title, createStyles, rem } from '@mantine/core'
import React, { useState } from 'react'
import shapeImg from "./../../../public/assets/primary-shape.png"

const useStyles = createStyles((theme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: `calc(${theme.spacing.md} * 2)`,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "transparent",
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
  
      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column-reverse',
        padding: theme.spacing.xl,
      },
    },
  
    image: {
      maxWidth: '100%',
      marginRight:'-130px',
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    body: {
      paddingRight: `calc(${theme.spacing.xl} * 1)`,
  
      [theme.fn.smallerThan('sm')]: {
        paddingRight: 0,
        marginTop: theme.spacing.xl,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : "text-slate-950",
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
      marginBottom: theme.spacing.md,
      
    },
  
    controls: {
      display: 'flex',
      marginTop: theme.spacing.xl,
    },
  
    inputWrapper: {
      width: '100%',
      flex: '1',
    },
  
    input: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0,
    },
  
    control: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }));
  type HeaderCustom_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    HeaderImage?:any;
    ui?:string;
    props?:any;
  };
  
export const HeaderAboutUs = ({
    label,
    placeholder,
    description,
    HeaderImage,
    ...props
  }:HeaderCustom_TP)=> {
    const { classes } = useStyles();
    const [showShape,setShowShape] = useState(false)
  return (
    <div className='w-[100%] h-auto relative overflow-hidden' >
          <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={`${classes.title} text-slate-950`}>{label}</Title>
      
            <Text fw={500} className=' text-slate-900' fz="lg" mb={5}>
              {description}
            </Text>
            
            <Text fw={500} className=' text-slate-900' fz="lg" mb={5}>
              {description}
            </Text>

           
          </div>
        
          <Image src={HeaderImage} width={100} height={100} alt='img'  className={`${classes.image}`} />
          
       
        </div>
     
      </div>
  )
}
export default HeaderAboutUs