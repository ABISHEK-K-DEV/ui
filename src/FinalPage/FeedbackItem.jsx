import React, { useState } from "react";

function FeedbackItem({ id, date, content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="flex flex-col self-stretch mt-6 w-full bg-white rounded shadow min-h-[40px] max-md:max-w-full">
      <div className="flex flex-wrap items-center px-4 w-full max-md:max-w-full">
        <h3 className="flex-1 shrink self-stretch my-auto text-base tracking-normal min-h-[24px] min-w-[240px] text-blue-800 text-opacity-90 max-md:max-w-full">
          Feedback {id}
        </h3>
        <time className="self-stretch my-auto text-base tracking-normal text-black whitespace-nowrap min-h-[24px] w-[92px]">
          {date}
        </time>
        <button
          onClick={toggleExpanded}
          className={`flex items-center justify-center w-8 h-8 transition-transform duration-200 ${expanded ? "" : "rotate-180"}`}
        >
          <img
            loading="lazy"
            src={
              expanded
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/8d6a012ca8b8d7335d4a1eac67e57794789c33fc091169990465282208b367f1?placeholderIfAbsent=true&apiKey=e5cda985c754462e9c5f3c8a32015bec"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/6165471633e60900932251dadcce6cae652c4bbd47bdc9966bb2906bcf8707ee?placeholderIfAbsent=true&apiKey=e5cda985c754462e9c5f3c8a32015bec"
            }
            alt="Toggle visibility"
            className="object-contain w-6 h-6"
          />
        </button>
      </div>
      {expanded && content && (
        <div className="flex flex-col px-4 pt-2 w-full text-sm tracking-normal leading-relaxed text-neutral-800 max-md:max-w-full">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              <div>{item.question}</div>
              <div className="leading-6 text-neutral-800 text-opacity-60 max-md:max-w-full">
                {item.answer}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </article>
  );
}

export default FeedbackItem;
