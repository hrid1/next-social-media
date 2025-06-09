import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FaHome } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function LeftSidebar() {
  return (
    <div className="space-y-8 w-60">
      <div className="">
        {/* logo */}
        <FaXTwitter className="text-4xl text-gray-800" />
      </div>

      <div className="space-y-6">
        {/* navigation */}
        <div className="flex items-center gap-2">
          <IoMdHome className="text-2xl " />
          <Link className="font-semibold" href="/">
            Home
          </Link>
        </div>
        <div>
          <Button className="bg-blue-400 text-white rounded-full w-full">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
