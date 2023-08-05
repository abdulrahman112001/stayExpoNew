"use client"
import { TextInput, createStyles, rem } from '@mantine/core';
import React, { useState } from 'react'

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
      width:"350px"
    },
  
    label: {
      position: 'absolute',
      zIndex: 2,
      top: rem(7),
      left: theme.spacing.sm,
      paddingLeft:"5px",
      paddingRight:"5px",
      paddingTop:"3px",
      paddingBottom:"3px",
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(${theme.spacing.sm}, ${rem(-15)})` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
      background : 'white'
    },
  
    required: {
      transition: 'opacity 150ms ease',
      opacity: floating ? 1 : 0,
    },
  
    input: {
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
        width:"500px"
        

      },
      '&:focus':{
         borderColor: '#5d22d5'
      }
    },
  }));
  
export const InputFloatingLabel = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });
  return (
    <TextInput
    label="Search by Booking ID"
    required
    classNames={classes}
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    mt="md"
    size='md'
    autoComplete="nope"
  />
  )
}
export default InputFloatingLabel