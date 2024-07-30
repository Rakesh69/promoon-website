import ReasearchIcon from '@/icons/ReasearchIcon';
import DesignIcon from '@/icons/DesignIcon';
import ProjectDevlopmentIcon from '@/icons/ProjectDevlopmentIcon';
import QualityAssuranceIcon from '@/icons/QualityAssuranceIcon';
import DeployProjectIcon from '@/icons/DeployProjectIcon';
import { useState, useRef, useEffect } from 'react';

const DEVLOPMENT_CIRCLE: {
  id: number;
  icon: React.ReactNode;
  title: string;
}[] = [
  {
    id: 1,
    icon: <ReasearchIcon />,
    title: 'Research and discovery',
  },
  {
    id: 2,
    icon: <DesignIcon />,
    title: 'Design and prototyping',
  },
  {
    id: 3,
    icon: <ProjectDevlopmentIcon />,
    title: 'Project Development',
  },
  {
    id: 4,
    icon: <QualityAssuranceIcon />,
    title: 'Quality Assurance',
  },
  {
    id: 5,
    icon: <DeployProjectIcon />,
    title: 'Project Deployment',
  },
];

const DevlopmentCircle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      if (section && !isVisible) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);
  return (
    <section className="bg-bg-colors-background w-full p-4 md:p-0  ">
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } container w-full mx-auto py-[52px] xl:px-5 md:px-12 px-5 `}
      >
        <div className="flex flex-col gap-4 mb-[40px] justify-center items-center">
          <h3 className="text-white text-center font-semibold tracking-0.14px leading-2 text-3xl lg:leading-48px">
            The ProMoon development circle
          </h3>
          <p className="text-white text-center items-center font-normal text-base lg:leading-6 lg:tracking-0.14px mx-auto max-w-[680px]">
            Our experienced engineers and developers is highly capable and
            experienced in providing the highest quality of service possible.
          </p>
        </div>
        <div className="flex flex-col justify-center  ">
          <div className="h-1px w-full bg-borderbg" />

          <div className="grid grid-cols-1 w-full grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-6 my-6">
            {DEVLOPMENT_CIRCLE.map(({ icon, id, title }) => {
              return (
                <div
                  key={id}
                  id={id.toString()}
                  className={`bg-white text-textPrimary hover:-translate-y-2 transition duration-500  ${
                    DEVLOPMENT_CIRCLE.length === id
                      ? 'md:col-span-2 lg:col-auto'
                      : ''
                  } font-medium leading-6 tracking-0.14px flex flex-col justify-center items-center text-center  rounded-rounded-10px`}
                >
                  <div>{icon}</div>
                  <div className="w-full">
                    <p className=" my-4 text-sm md:font-medium">{title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-1px w-full bg-borderbg" />
        </div>
      </div>
    </section>
  );
};

export default DevlopmentCircle;
