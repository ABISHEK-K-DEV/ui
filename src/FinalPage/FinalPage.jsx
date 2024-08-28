import React from "react";
import GenericWebsiteRating from "./GenericWebsiteRating";


export const FinalPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="fixed w-full h-16 top-0 left-0 bg-white shadow-md flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <img src="/ss.png" alt="User Icon" className="h-8 w-8 ml-2 md:ml-4" />
          <span className="ml-2 text-lg font-semibold">USER Feedback</span>
        </div>
      </div>
      <div className="mt-20">
       <GenericWebsiteRating/>
      </div>
    </div>
  );
};

