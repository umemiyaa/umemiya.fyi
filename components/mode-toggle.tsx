"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { Button } from '@/components/mdx/button';
import { Moon, SunMedium } from 'lucide-react';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
          className='text-muted-foreground'
          onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
        >
          <SunMedium size={20} className='dark:inline-block hidden' />
          <Moon size={20} className='inline-block dark:hidden' />
        </Button>
    )
}
