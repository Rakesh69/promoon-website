import ReasearchIcon from '@/icons/ReasearchIcon';
import DesignIcon from '@/icons/DesignIcon';
import ProjectDevlopmentIcon from '@/icons/ProjectDevlopmentIcon';
import QualityAssuranceIcon from '@/icons/QualityAssuranceIcon';
import DeployProjectIcon from '@/icons/DeployProjectIcon';

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
  return (
    <section className="bg-blackBlue w-full dark:bg-darkbg">
      <div className="max-w-screen-xl w-90% mx-auto py-85px">
        <div className="flex flex-col gap-4 mb-14 justify-center items-center">
          <h3 className="text-white text-center font-bold tracking-0.14px leading-2 text-xl sm:text-2xl md:text-3xl lg:text-32px lg:leading-48px">
            The ProMoon development circle
          </h3>
          <p className="text-white text-center font-normal md:text-xl lg:text-xl lg:font-normal lg:leading-6 lg:tracking-0.14px">
            Our experienced engineers and developers is highly capable and
            experienced in providing the highest quality of service possible.
            Whether you are a startup or an established enterprise, our team of
            professionals can create custom solutions for you that are designed
            to Our services include web design and development, mobole apps
            development.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-1px w-full bg-borderColor" />

          <div className="grid grid-cols-1 w-full grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-6 my-23px">
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
                    <p className=" my-4 lg:text-base md:font-medium">{title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-1px w-full bg-borderColor" />
        </div>
      </div>
    </section>
  );
};

export default DevlopmentCircle;
