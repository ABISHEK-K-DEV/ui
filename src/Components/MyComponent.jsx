import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormCard from './FormCard';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';

const MyComponent = () => {
  const navigate = useNavigate();

  const formData = [
    {
      id: 1,
      icon: <AssignmentIcon />,
      title: "Delivery",
      submitted: 10,
      viewed: 55,
      datePublished: "8/8/2024",
    },
    {
      id: 2,
      icon: <AssignmentIcon />,
      title: "Marketing",
      submitted: 100,
      viewed: 300,
      datePublished: "07/8/2024",
    },
  ];

  return (
    <main className="mt-14 mb-0 ml-11 max-w-full w-[998px]">
      <div className="flex gap-5">
        <section className="flex flex-col w-[33%]">
          <div
            className="flex flex-col items-center px-16 pt-36 pb-24 w-full text-3xl font-medium tracking-normal leading-relaxed text-black bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => navigate('/add')}
          >
            <AddIcon fontSize="large" />
            <h1 className="mt-7">New Form</h1>
          </div>
        </section>
        {formData.map((form, index) => (
          <section
            key={index}
            className="flex flex-col w-[33%]"
          >
            <FormCard {...form} />
          </section>
        ))}
      </div>
    </main>
  );
};

export default MyComponent;
