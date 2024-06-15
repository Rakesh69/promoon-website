import { useState } from 'react';
const SolutionModel: React.FC<{
  data: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}> = (props) => {
  return (
    <>
      {props.data.map(({ description, icon, id, title }, index) => {
        return (
          <div
            key={index}
            className="bg-white group md:flex md:flex-col md:justify-center md:items-center lg:block shadow-solutionModelShadow p-6 lg:pt-[35px]  lg:pr-[26px] lg:pl-[47px] border rounded-lg hover:-translate-y-2 transition duration-500 "
          >
            <div className="pb-3">{icon}</div>
            <div className="pb-3">
              <h3 className="text-textPrimary truncate font-bold  text-base lg:text-xl  lg:font-bold lg:leading-8 tracking-[0.14px]">
                {title}
              </h3>
            </div>
            <div className="h-[4px] bg-blue group-hover:w-[30%] w-[67.84px] transition-all duration-500 ease-in-out"></div>
            <div className="pt-3">
              <p className="font-normal md:text-center lg:text-start text-textSecondary lg:text-lg lg:leading-7 tracking-[0.27px]">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SolutionModel;
