import React from 'react';
const OBJECTIVE = [
  {
    id: 1,
    title: 'Product enhancement through an Agile approach',
  },
  {
    id: 2,
    title: 'Regular Security Audits',
  },
  {
    id: 3,
    title: 'Bi-weekly code back-ups',
  },
  {
    id: 4,
    title:
      'Constant upgradation of the system based on new software/version release',
  },
  {
    id: 5,
    title:
      'Full Testing the system each month to find any bugs, incompatibility and error',
  },
  {
    id: 6,
    title:
      'Monitoring of the traffic and server load and optimizing according to the business needs.',
  },
];
const Maintenance = () => {
  return (
    <section className="md:pt-12">
      <div className="bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl shadow-lg">
        <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
          Maintenance
        </h1>
        <h2 className=" md:pt-8 font-bold text-textPrimary text-base mb-4 pl-8 relative w-fit text-bold">
          OBJECTIVE
          <div className="border-animation ml-8 " />
        </h2>
        <ul className="pl-12">
          {OBJECTIVE.map(({ title, id }) => (
            <li
              key={id}
              className="text-textPrimary text-lg mb-4 lg:pl-4 list-disc"
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Maintenance;
