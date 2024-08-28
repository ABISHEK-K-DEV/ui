import React from "react";

function FeedbackInfo({ label, value }) {
  return (
    <p className="mt-5 text-sm font-semibold tracking-normal leading-loose text-zinc-800 max-md:ml-0.5">
      {label}: {value}
    </p>
  );
}

export default FeedbackInfo;