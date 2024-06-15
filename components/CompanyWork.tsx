import Image from "next/image";
import CreditCardIcon from "@/icons/CreditCardIcon";
import RocketIcon from "@/icons/RocketIcon";
import MessageIcon from "@/icons/MessageIcon";
import ToolsIcon from "@/icons/ToolsIcon";
import termWorkImage from "../public/assets/termwork.png";

const OUR_SPECIALITY: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    id: Math.random(),
    icon: <CreditCardIcon />,
    title: "Powerful software platform",
    description:
      "For teams, we're bringing enhancements to meetings and multitasking to help users seamlessly work with their data wherever they work.",
  },
  {
    id: Math.random(),
    icon: <RocketIcon />,
    title: "Project management",
    description:
      "An IT project manager oversees and manages IT-centric projects with a similar set of managerial and leadership skills required of a traditional project manager.",
  },
  {
    id: Math.random(),
    icon: <ToolsIcon />,
    title: "Powerful software platform",
    description:
      "ProMoon has the tools and expertise to help businesses leverage the latest technology to accelerate their growth.",
  },
  {
    id: Math.random(),
    icon: <MessageIcon />,
    title: "Innovative software solutions",
    description:
      "Our innovative solutions use software to organize and manage projects for better efficiency and outcomes.",
  },
];
const CompanyWork = () => {
  return (
    <>
      <section className="bg-[url('/assets/CompanyWorkWave.png')] dark:bg-dark-header-waves pb-14 lg:pt-0 pt-4 bg-no-repeat bg-top bg-cover w-full h-full dark:bg-white">
        <div className="max-w-screen-xl w-90% m-auto">
          <div className="section-container gap-6 flex flex-col h-full w-full items-center lg:flex-row bg-top">
            <div className="part1 w-full grid grid-cols-1 grid-rows-4 lg:w-3/4 gap-10 md:grid-cols-2 md:grid-rows-2 ">
              {OUR_SPECIALITY.map(({ description, icon, id, title }) => (
                <div key={id} className="w-full flex flex-col justify-center">
                  <div className="flex justify-center md:block">{icon}</div>

                  <h3 className="text-2xl pt-2 font-semibold text-center md:text-left w-full text-textPrimary">
                    {title}
                  </h3>
                  <p className="text-xl pt-1 text-center text-textSecondary md:text-left w-full">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="part2 lg:w-1/4">
              <div className="bg-white shadow-customShadow gap-4 flex flex-col md:flex-row lg:flex-col p-4 rounded-2xl">
                <div className="md:w-2/4 lg:w-full">
                  <Image
                    src={termWorkImage}
                    className="rounded-2xl w-full"
                    alt="companyWorkImage"
                  />
                </div>
                <div className="md:w-2/4 lg:w-full">
                  <h3 className="text-textPrimary font-semibold text-xl md:text-2xl">
                    Get insights on Search
                  </h3>
                  <p className="text-textSecondary text-base lg:text-base md:text-lg md:mt-2">
                    Website visitors today demand a frictionless user experience
                    — especially when using search. We provide high standards
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyWork;
