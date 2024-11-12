import { auth, signOut } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";

import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { Question } from "@/types/global";
import console from "console";
import Link from "next/link";
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
const questions: Question[] = [
  {
    _id: "1",
    title: "How to learn JavaScript?",
    tags: [
      { _id: "1", name: "JavaScript" },
      {
        _id: "2",
        name: "JavaScript",
      },
      {
        _id: "3",
        name: "Java",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/avatar.jpg",
    },
    upvoetes: 10,
    answers: 5,
    views: 20,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn React?",
    tags: [
      { _id: "1", name: "React" },
      {
        _id: "2",
        name: "JavaScript",
      },
      {
        _id: "3",
        name: "Java",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/avatar.jpg",
    },
    upvoetes: 10,
    answers: 5,
    views: 20,
    createdAt: new Date("2024-07-11"),
  },
  {
    _id: "3",
    title: "How to learn Next.js?",
    tags: [
      { _id: "1", name: "Next.js" },
      {
        _id: "2",
        name: "JavaScript",
      },
      {
        _id: "3",
        name: "Java",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/avatar.jpg",
    },
    upvoetes: 10,
    answers: 5,
    views: 20,
    createdAt: new Date("2023-01-01"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter ? question.tags[0].name.toLowerCase() === filter.toLowerCase() : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900"> All Questions</h1>
        <Button className="primary-gradient min-h-[46px] padx-4 py-3 !text-light-900">
          <Link href={ROUTES.ASK_QUESTION}> Ask a Question </Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route={ROUTES.HOME} imgSrc={"/icons/search.svg"} placeholder={"Search questions.."} otherClases={"flex-1"} />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
