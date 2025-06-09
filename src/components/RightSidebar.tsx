"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function RightSidebar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    if (searchValue.trim() === "") return;
    router.push(`/search/${searchValue}`);
  };
  return (
    <>
      <div className="sticy top-0 bg-white py-2">
        <form onSubmit={handleSubmit}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="rounded-full"
          />
        </form>
      </div>
    </>
  );
}
