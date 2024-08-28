
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const FormBuilder = () => {
  const fb = useRef();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const options = {
      disabledActionButtons: ['data', 'clear'],
      showActionButtons: false,
    };

    $(fb.current).formBuilder(options);
  }, []);

  const handleReset = () => {
    $(fb.current).formBuilder("setData", "");
  };

  const handleData = () => {
    const formData = $(fb.current).formBuilder("getData");
    console.log(formData);
    navigate("/final"); // Redirect to FinalPage
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl max-w-4xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
          Build Your Custom Form
        </h2>
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 md:p-4 mb-4 rounded-md shadow-md">
          <p className="text-center text-lg font-medium">
            Use the options below to build your custom form.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-2"
          >
            Reset
          </button>
          <button
            onClick={handleData}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Data
          </button>
        </div>
        <div
          id="fb-editor"
          ref={fb}
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] bg-gray-50"
        />
      </div>
    </div>
  );
};

export default FormBuilder;

