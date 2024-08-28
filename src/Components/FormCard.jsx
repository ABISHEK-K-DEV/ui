import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormCard = ({ id, icon, title, submitted, viewed, datePublished, onEdit }) => {
  const navigate = useNavigate();

  return (
    <article className="flex flex-col grow pb-4 mt-1 w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <header className="flex flex-col justify-center items-center px-16 py-4 bg-amber-300 rounded-t-lg">
        {typeof icon === 'string' ? (
          <img loading="lazy" src={icon} alt="" className="object-contain w-12 aspect-square" />
        ) : (
          <div className="w-12 h-12">{icon}</div> 
        )}
      </header>
      <div className="flex flex-col px-4 mt-4 text-sm font-medium">
        <h2 className="text-xl text-black">{title}</h2>
        <p className="mt-3 text-black">
          <span className="text-neutral-400">Submitted: </span> {submitted}
        </p>
        <p className="mt-3 text-black">
          <span className="text-neutral-400">Viewed: </span> {viewed}
        </p>
        <p className="mt-3 text-black">
          <span className="text-neutral-400">Date Published: </span> {datePublished}
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="px-6 py-2 mr-2 text-white bg-green-600 rounded shadow hover:bg-green-700"
          >
            Edit
          </button>
          <button
            className="px-6 py-2 text-white bg-red-600 rounded shadow hover:bg-red-700"
          >
            Delete
          </button>
        </div>
        <button className="mt-6 px-6 py-2 self-center text-base tracking-wide leading-7 text-white uppercase bg-fuchsia-700 rounded shadow">
          View Submission
        </button>
      </div>
    </article>
  );
};

export default FormCard;
