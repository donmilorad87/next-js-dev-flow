import TagCard from '@/components/cards/TagCard'
import ROUTES from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const hotQuestions = [
    {
        _id:"1",
        title:"What is your favorite programming language?",
    },
    {
        _id:"2",
        title:"What is your favorite programming language?",
    },
    {
        _id:"3",
        title:"What is your favorite programming language?",
    },
    {
        _id:"4",
        title:"What is your favorite programming language?",
    },
    {
        _id:"5",
        title:"What is your favorite programming language?",
    },
]

const popularTags = [
    {
        _id:"1",
        name:"React",
        questions: 200
    },
    {
        _id:"2",
        name:"JavaScript",
        questions: 1234
    },
    {
        _id:"3",
        name:"PHP",
        questions: 2001
    },
    {
        _id:"4",
        name:"TypeScript",
        questions: 20125315230
    },
    {
        _id:"5",
        name:"SQL",
        questions: 1234
    },
]

const RightSidebar = () => {
  return (
    <section className='pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-1 p-6 shadow-light-300 dark:shadow-none max-xl:hidden'>
        <div>
            <h3 className='h3-bold text-dark200_light900 '>Top Questions</h3>
            <div className='mt-7 flex w-full flex-col gap-[30px]'>
            {
                    hotQuestions.map(
                        ({_id, title})=>{
                            return(
                                <Link href={ROUTES.PROFILE(_id)} key={_id} className='flex cursor-pointer items-center gap-7 justify-between'>
                                    <p className='body-medium text-dark500_lightl00'>{title}</p>
                                    <Image src="/icons/chevron-right.svg" alt="Chevron" width={20} height={20} className='invert-colors' />
                                </Link>
                            )
                        }
                    )
                       
                    
                }
            </div>
        </div>
        <div className='mt-16'>
                <h3 className='h3-bold text-dark200_light900 '>Popular tags</h3>
                <div className='mt-7 flex flex-col gap-4'>
                    {
                        popularTags.map(
                            ({_id, name, questions})=>{
                                return(
                                    <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact/>
                                )
                            }
                        )
                    }

                </div>
        </div>
    </section>
  )
}

export default RightSidebar