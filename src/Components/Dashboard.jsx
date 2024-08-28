import React from "react";
import MyComponent from "./MyComponent"; 

export const Dashboard = () => {
  return (
    <div className="w-full h-16">
      <div className="fixed w-full h-16 top-0 left-0 bg-white shadow-[0px_4px_4px_#00000040] flex items-center">
        <img src="/ss.png" alt="User Icon" className="h-8 w-8 ml-4" />
        <span className="ml-2 text-lg font-semibold">USER Feedback</span>
      </div>
      <div className="mt-20">
        <MyComponent />
      </div>
    </div>
  );
};
// 


