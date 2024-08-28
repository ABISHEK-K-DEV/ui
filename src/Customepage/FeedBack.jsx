import React from "react";
import { useParams } from "react-router-dom";
import FormBuilder from "./FormBuilder";

export const FeedBack = () => {
  const { id } = useParams(); // Get the id from the URL

  return (
    <div className="w-full min-h-screen">
      <div className="fixed w-full h-16 top-0 left-0 bg-white shadow-md flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <img src="/ss.png" alt="User Icon" className="h-8 w-8 ml-2 md:ml-4" />
          <span className="ml-2 text-lg font-semibold">
            {id ? `Edit Feedback ${id}` : "USER Feedback"}
          </span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 md:px-4 md:py-2">
            Save
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 md:px-4 md:py-2">
            Publish
          </button>
        </div>
      </div>
      <div className="mt-20">
        <FormBuilder />
      </div>
    </div>
  );
};
