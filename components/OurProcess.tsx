import React from 'react';

const OUR_PROCESSES: { id: number; title: string }[] = [
  {
    id: 1,
    title:
      'After an initial consultation, we’ll help you find the best fit lead your team. Each lead is supported by a team of experienced professionals who are dedicated to helping the lead achieve success.',
  },
  {
    id: 2,
    title:
      'Your lead becomes a core member of your team, working closely with you to develop with you to develop and implement strategies thatdrive results. They bring a wealth of experience and expertise to the table, and are dedicated to helping you achieve your goals.',
  },
  {
    id: 3,
    title:
      'Your lead will also work with their supporting team to deliver projects/milestones weekly. While the team iterates on the project, the lead can provide updates as frequently as needed - generally during weekly or daily stand-ups.',
  },
  {
    id: 4,
    title:
      'You get the best of both worlds - the efficiency of a team working together towards a common goal and the flexibility of individualized attention and support from a dedicated lead.',
  },
];

const OurProcess = () => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center h-[200px]"
          style={{
            backgroundImage: "url('/assets/topDarkOurProcessBg.png')",
          }}
        />

        <div className="flex h-full justify-center items-center">
          <section className="py-8 container w-full mx-auto">
            <div className="flex flex-col my-10 gap-10">
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl md:text-32px mb-2 text-textPrimary font-semibold dark:text-white">
                  Our process
                </p>
                <p className="text-center text-base md:font-normal text-textSecondary dark:text-darkText">
                  Find out how ProMoons team works to simplify scheduling for
                  you and your team.
                </p>
              </div>
              <div className="md:pt-[43px] pt-0 px-4">
                <div className="sticky pt-[34px]">
                  {OUR_PROCESSES.map(({ id, title }) => (
                    <div
                      key={id}
                      className="gap-2 text-textSecondary my-9 border-l-2 border-ourProcessBorder pl-2"
                    >
                      <p className="md:text-xl font-normal dark:text-darkTextPrimary">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="bg-cover -mt-64 bg-center h-[400px]"
          style={{
            backgroundImage: "url('/assets/darkOurProcess.png') ",
          }}
        />
      </div>
    </>
  );
};

export default OurProcess;
