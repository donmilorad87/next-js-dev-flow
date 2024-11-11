import {ReactNode} from 'react'
import Navbar from "@/components/ui/navigation/navbar";
import LeftSidebar from '@/components/ui/navigation/navbar/LeftSidebar';
import RightSidebar from '@/components/ui/navigation/navbar/RightSidebar';

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='background-light850_dark100 relative'>
      <head>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      </head>
        <Navbar />
        <div className='flex'>
          <LeftSidebar/>
          <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
            <div className='mx-auto w-full max-w-5xl'>
              {children}
            </div>
          </section>
          <RightSidebar/>
        </div>
      
    </main>
  )
}

export default RootLayout