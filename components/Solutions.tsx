import SolutionModel from './model/SolutionModel';
import AnalyticsIcon from '@/icons/SolutionIcons/AnalyticsIcon';
import ContentManagment from '@/icons/SolutionIcons/ContentManagment';
import CustomeWebDesign from '@/icons/SolutionIcons/CustomeWebDesign';
import CustomMobileApp from '@/icons/SolutionIcons/CustomMobileApp';
import EcommersSiteIcon from '@/icons/SolutionIcons/EcommersSiteIcon';
import MaintenanceIcon from '@/icons/SolutionIcons/MaintenanceIcon';
import MobileAppDevlopment from '@/icons/SolutionIcons/MobileAppDevlopment';
import SearchEngineIcon from '@/icons/SolutionIcons/SearchEngineIcon';
import WebHosting from '@/icons/SolutionIcons/WebHosting';

const OUR_SOLUTIONS: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    id: Math.random(),
    icon: <CustomeWebDesign />,
    title: 'Custom web design and development',
    description:
      'Our expert web app developers are skilled in using technologies and frame-work to create interactive and feature-rich web applications. They have a strong understanding of back-end technologies. ',
  },
  {
    id: Math.random(),
    icon: <MobileAppDevlopment />,
    title: 'Mobile app development',
    description:
      'We offer mobile app development for various platforms using technologies. We also have expertise in cross-platform frameworks, Our process includes planning, design and testing to deliver high -quality apps that meet client needs. ',
  },
  {
    id: Math.random(),
    icon: <EcommersSiteIcon />,
    title: 'E-commerce website development',
    description:
      'Our e-commerce website development team specializes in platforms. We build custom websites with useful features for a positive and secure shopping experience.',
  },
  {
    id: Math.random(),
    icon: <SearchEngineIcon />,
    title: 'Search engine optimization',
    description:
      'We offer search engine optimization (SEO) service to improve the visibility and ranking of websites in search engine results pages. Our team uses different techniques to attract organic traffic.',
  },
  {
    id: Math.random(),
    icon: <ContentManagment />,
    title: 'Content management systems',
    description:
      'Our content management system (CMS) is a tool for creating, managing and publishing digital content. It is user-friendly and customizable with features for managing text, image and videos. ',
  },
  {
    id: Math.random(),
    icon: <WebHosting />,
    title: 'Web hosting',
    description:
      'We offer hosting services with many options. Our services include unlimited bandwidth, high-performance servers and automatic backups. We can help choose the right hosting plan and provide ongoing support and maintenance.',
  },
  {
    id: Math.random(),
    icon: <AnalyticsIcon />,
    title: 'Analytics and reporting',
    description:
      'Our analytics and reporting team uses tools and technologies to gather, analyze and visualize data from various sources. We help clients make informed decisions and track the performance of websites, opps and digital platforms.',
  },
  {
    id: Math.random(),
    icon: <MaintenanceIcon />,
    title: 'Maintenance and support',
    description:
      'Our maintenance and support team provides updates, bug fixes, security patches and technical support to ensure that clients digital platforms are running smoothly. Our team is skilled and available to assist with any issues.',
  },
  {
    id: Math.random(),
    icon: <CustomMobileApp />,
    title: 'Custom web design and development',
    description:
      'Our expert web app developers are skilled in using technologies and frame-work to create interactive and feature-rich web applications. They have a strong understanding of back-end technologies. ',
  },
];

const Solutions = () => {
  return (
    <section className="bg-gray-100 py-[50px]">
      <div className="max-w-screen-xl w-90% m-auto">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center pb-12">
            <h3 className="text-textPrimary text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              We pride ourselves in delivering highly-customized and responsive
              solutions that help companies succeed
            </h3>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 grid grid-cols-1 grid-rows-9 gap-5 ">
            <SolutionModel data={OUR_SOLUTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
