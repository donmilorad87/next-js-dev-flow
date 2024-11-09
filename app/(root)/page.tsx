import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import console from "console";
import React from "react";

/* import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
   */
const Home = async () => {
    const session = await auth()
    console.log(session);
    
    return (
        <>
            <h1 className="h1-bold">Home</h1>

            <form 
                className="px-10 pt-[100px]" 
                action={async () =>{
                    "use server";
                    await signOut({
                        redirectTo: ROUTES.SIGN_IN
                    });
                }}>
                <Button type="submit">
                    Log out
                </Button>
            </form>
        </>
    ) 
};

export default Home;
