"use client";
import React from 'react'

import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
 
    SheetClose,

  } from "@/components/ui/sheet"
import ROUTES from '@/constants/routes';

const NavLinks = ({isMobileNav = false} : {isMobileNav?: boolean}) => {
    const pathname = usePathname()
    const userId = 1;
  return (
    <>
    {sidebarLinks.map((item) => {
       
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

        if(item.route === ROUTES.PROFILE("1")){
            if(userId) item.route = ROUTES.PROFILE("1")
            else return null;
        }

        const LinkCompoent = (
            
                <Link key={item.label} href={item.route} className={cn(isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900', 'flex items-center justify-start gap-4 bg-transparent p-4')}>
                    <Image src={item.imgURL} width={20} height={20} alt={item.label} className={cn({"invert-colors": !isActive})}/>
                        <p className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>
                            {item.label}
                        </p>
                
                </Link>
          
        )
        return isMobileNav ? (
            <SheetClose asChild key={item.route}> 
                {LinkCompoent}
            </SheetClose>
        ) : (
            <React.Fragment key={item.route}>{LinkCompoent}</React.Fragment>
        )
    })}
    </>
  )
}

export default NavLinks