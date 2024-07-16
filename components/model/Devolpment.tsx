import React from 'react';

const Devolpment = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title:
        'Catering the requirement for frontend, backend, web services, and API development integration.',
    },
    {
      id: 2,
      title: 'Prepare a strategy for Agile Scrum methodology',
    },
    {
      id: 3,
      title:
        'Factor the aspects of multi-tenancy, scalability, 3rd party integration',
    },
    {
      id: 4,
      title: 'To set up a 2-3 week frequency for sprints/milestones',
    },
    {
      id: 5,
      title: 'Crafting an optimized clean code structure',
    },
    {
      id: 6,
      title: 'Involve client review in each sprint/milestone',
    },
  ];
  const WEBTECHNOLOGIES = [
    {
      id: 1,
      title: 'Back-end. : Laravel, Ruby, Python, Node.JS, Java',
    },
    {
      id: 2,
      title: 'Front-end. : AngularJS, ReactJS, VueJS Html5, CSS',
    },
    {
      id: 3,
      title: 'Database. : MongoDB, Mysql, PostgreSQL, Firebase',
    },
    {
      id: 4,
      title: 'OpenSource : Drupal, Magento, Wordpress',
    },
  ];
  const MOBILE_TECHNOLOGIES = [
    {
      id: 1,
      title: 'iOS : ObjectiveC, Swift, xCode',
    },
    {
      id: 2,
      title: 'Android. : Java, Android studio',
    },
    {
      id: 3,
      title: 'Hybrid. : Ionic, ReactNative',
    },
  ];
  const TEAM_MEMBERS_INVOLVED = [
    {
      id: 1,
      title: 'Project Manager',
    },
    {
      id: 2,
      title: 'Tech Lead',
    },
    {
      id: 3,
      title: 'Front-End Developers',
    },
    {
      id: 4,
      title: 'Back-End Developers',
    },
    {
      id: 5,
      title: 'QA Engineer',
    },
  ];
  return (
    <>
      <section id="development">
        <div
          id="planing"
          className=" bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl "
        >
          <h2 className="pt-8 font-bold text-textPrimary text-base mb-4 pl-8 text-bold">
            OBJECTIVE
          </h2>
          <ul className=" pl-12">
            {OBJECTIVE.map(({ title, id }) => (
              <li
                key={id}
                className="text-textPrimary text-lg mb-4 lg:pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className=" w-full py-10 lg:px-4">
          <h2 className="font-bold text-white text-base mb-4 text-bold pl-6">
            WEB TECHNOLOGIES
          </h2>
          <ul className=" pl-12">
            {WEBTECHNOLOGIES.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-6 lg:pt-9">
            MOBILE TECHNOLOGIES
          </h2>
          <ul className=" pl-12">
            {MOBILE_TECHNOLOGIES.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-6 lg:pt-9">
            TEAM MEMBERS INVOLVED
          </h2>
          <ul className=" pl-12">
            {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Devolpment;
