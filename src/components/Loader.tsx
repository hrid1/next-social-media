import React from "react";

export default function Loader() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-8 w-8 rounded-full border-[3px] border-blue-600 border-t-transparent" />
        <div className="animate-spin  h-8 w-8 rounded-full border-[3px] border-blue-600 border-l-transparent" />
      </div>
    </>
  );
}
