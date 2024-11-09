'use client';

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {toast} from '@/hooks/use-toast'
import ROUTES from '@/constants/routes';
import { signIn } from 'next-auth/react';
const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-13.5"

    const handleSignIn = async(provider: "github" | "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: false
            })
        } catch (error) {
            console.log(error)
            toast({
                title: `Sign-in Failed ${provider}`,
                description: error instanceof Error ? error.message : "An error occured during sign-in",
                variant: "destructive"
            });
        }
    }
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} variant={'outline'} onClick={()=>{handleSignIn('github')}}>

            <Image 
                src="/icons/github.svg"
                width={20}
                height={20}
                alt="Github Logo"
                className='invert-colors'
            />
            <span>
                Login with GitHub
            </span>
        </Button>
        <Button className={buttonClass} variant={'outline'} onClick={()=>{handleSignIn('google')}}>

                <Image 
                    src="/icons/google.svg"
                    width={20}
                    height={20}
                    alt="Google Logo"
                />
                <span>
                    Login with Google
                </span>
        </Button>
        
    </div>
  )
}

export default SocialAuthForm