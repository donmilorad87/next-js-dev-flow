import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles: string;
  isAutor?: boolean;
  href?: string;
  imgStyles?: string;
}

const Metric = ({ imgUrl, alt, value, title, textStyles, isAutor, href, imgStyles }: Props) => {
  const metricContent = (
    <>
      <Image src={imgUrl} alt={alt} width={16} height={16} className={`rounded-full object-contain invert-colors ${imgStyles}`} />
      <p className={`${textStyles} flex-center gap-1`}>{value}</p>
      <span className={`small-regular line-clamp-1 ${isAutor ? "max-sm:hidden" : ""}`}>{title}</span>
    </>
  );
  return href ? (
    <Link className="flex-center gap-1" href={href}>
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
