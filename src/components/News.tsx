"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Button } from "./ui/button";

export default function News() {
  const [articleNum, setArticleNum] = useState(4);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
      ).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  const randomArticles = useMemo(() => {
    if (!data?.articles) return [];
    return [...data.articles]
      .sort(() => 0.5 - Math.random())
      .slice(0, articleNum);
  }, [data?.articles, articleNum]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="space-y-4 bg-slate-100 p-4 rounded-xl">
      <h2 className="text-2xl font-bold">Top Headlines</h2>
      {randomArticles.map((article: any) => (
        <div
          key={article.title}
          className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.01] duration-300"
        >
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4"
          >
            {/* Image Section */}
            <div className="min-w-[56px] h-14 rounded-lg overflow-hidden border">
              <img
                src={article.urlToImage || "/images/news.png"}
                alt={article.title.slice(0, 10)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {article.description}
              </p>

              {/* Author */}
              <div className="text-xs text-gray-500 mt-2 italic">
                By {article.author || "Unknown Author"}
              </div>
            </div>
          </a>
        </div>
      ))}

      <button
        onClick={() => setArticleNum(articleNum + 4)}
        className=" text-slate-600 font-semibold cursor-pointer my-2"
      >
        Load More ...
      </button>
    </div>
  );
}
