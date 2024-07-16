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
            className="md:flex md:flex-col md:justify-center md:items-center lg:block  p-5 border border-slate-300 rounded-lg"
          >
            <div className="flex justify-between gap-2">
              <div className="">
                <h3 className="text-textPrimary font-semibold text-lg lg:leading-7">
                  {title}
                </h3>
              </div>
              <div className="">{icon}</div>
            </div>
            <div className="pt-2.5">
              <p className="font-normal md:text-center lg:text-start text-textSecondary text-base lg:leading-7 ">
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
