"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClases?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClases }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searcParams = useSearchParams();
  const query = searcParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState<string>(query);

  useEffect(() => {
    const delayDevaunceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({ params: searcParams.toString(), key: "query", value: searchQuery });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searcParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDevaunceFn);
  }, [searchQuery, router, route, searcParams, pathname]);

  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClases}`}>
      <Image src={imgSrc} width={24} height={24} alt="serarc" className="cursor-pointer" />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="paragraf-regular no-focus placeholder text-dark400_light700 shadow-none border-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
