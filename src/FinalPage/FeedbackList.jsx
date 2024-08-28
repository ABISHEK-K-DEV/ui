import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const feedbackItems = [
    {
      id: 1,
      date: "10/08/2024",
      content: [
        { question: "Would you like to add a comment?", answer: "The website is user-friendly and easy to navigate. I found exactly what I was looking for without any hassle. The checkout process was quick, and I appreciate the seamless online shopping experience." },
        { question: "How likely is it that you will recommend us to your family and friends?", answer: "5" },
        { question: "Give a star rating for the website.", answer: "2" },
        { question: "Do you have any suggestions to improve our website?", answer: "The website is user-friendly and easy to navigate. I found exactly what I was looking for without any hassle. The checkout process was quick, and I appreciate the seamless online shopping experience." },
        { question: "Multiple choice - 1 answer", answer: "Radio 1" },
        { question: "Pick a subject and provide your feedback:", answer: "Bug" }
      ]
    },
    { id: 2, date: "10/08/2024", content: null },
    { id: 3, date: "10/08/2024", content: null }
  ];

  return (
    <div className="flex flex-col self-stretch mt-7 max-md:max-w-full">
      {feedbackItems.map((item) => (
        <FeedbackItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FeedbackList;
