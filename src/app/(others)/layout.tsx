import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex justify-between max-w-7xl mx-auto ">
        <div className="hidden sm:inline border-r h-screen sticky top-0 p-3">
          <LeftSidebar />
        </div>

        <div className="w-2xl flex-1">{children}</div>

        <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[26rem]">
          <RightSidebar />
        </div>
      </main>
    </>
  );
}
