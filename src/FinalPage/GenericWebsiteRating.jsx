
import React from "react";
import Header from "./Header";
import StatisticBox from "./StatisticBox";
import FeedbackInfo from "./FeedbackInfo";
import FeedbackList from "./FeedbackList";

function GenericWebsiteRating() {
  const statistics = [
    { value: 40, label: "VIEWS" },
    { value: 3, label: "Submitted" }
  ];

  const currentDate = new Date();
  const feedbackInfo = [
    { label: "Page URL contains", value: "example.com/about" },
    { label: "Date", value: currentDate.toLocaleDateString() },
    { label: "Time", value: currentDate.toLocaleTimeString() }
  ];

  return (
    <main className="flex flex-col self-center pb-52 mt-12 w-full bg-white rounded-xl max-w-[1857px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <Header />
      <section className="flex flex-col items-start mt-14 -mb-10 ml-8 max-w-full w-[985px] max-md:mt-10 max-md:mb-2.5">
        <div className="flex gap-5 justify-between ml-28 max-w-full text-3xl font-bold tracking-normal text-center text-black leading-[57px] w-[375px] max-md:ml-2.5">
          {statistics.map((stat, index) => (
            <StatisticBox key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
        {feedbackInfo.map((info, index) => (
          <FeedbackInfo key={index} label={info.label} value={info.value} />
        ))}
        <h2 className="mt-6 text-xl font-medium tracking-normal leading-loose text-black max-md:ml-0.5">
          Feedback List
        </h2>
        <FeedbackList />
      </section>
    </main>
  );
}

export default GenericWebsiteRating;


