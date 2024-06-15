import Link from 'next/link';
import FacebookIcon from '@/icons/FacebookIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import InstragramIcon from '@/icons/InstragramIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import AddressPopup from './AddressPopup';

const Services = () => {
  const FOOTER_SERVICE: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Technology', route: 'technology' },
    { id: 2, name: 'Website development', route: 'website-development' },
    { id: 3, name: 'Project development', route: 'project-development' },
    { id: 4, name: 'Mobile app development', route: 'mobile-app-development' },
  ];
  const FOOTER_RESOURCES: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Success Stories', route: 'success-stories' },
    { id: 2, name: 'Get in Touch', route: 'get-in-touch' },
    { id: 3, name: 'About Pixeldart', route: 'about-pixeldart' },
    { id: 4, name: 'Blog', route: 'blog' },
  ];
  const FOOTER_INFORMATION: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Careers', route: 'career' },
    { id: 2, name: 'FAQ', route: 'faq' },
    { id: 3, name: 'Privacy Policy', route: 'privacy-policy' },
    {
      id: 4,
      name: 'Do Not Sell My Personal Information',
      route: 'do-not-sell-my-personal-information',
    },
    {
      id: 5,
      name: 'Terms of Use',
      route: 'terms-of-use',
    },
    { id: 6, name: 'Sitemap', route: 'sitemap' },
  ];

  const SOCIAL_MEDIA_ICONS: {
    id: number;
    icon: React.ReactNode;
    name: string;
    href: string;
  }[] = [
    {
      id: 1,
      icon: <FacebookIcon />,
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100091227716427',
    },
    {
      id: 2,
      icon: <TwitterIcon />,
      name: 'Twitter',
      href: 'https://twitter.com/home',
    },
    {
      id: 3,
      icon: <InstragramIcon />,
      name: 'Instragram',
      href: 'https://www.instagram.com/pixeldart_official/',
    },
    {
      id: 4,
      icon: <LinkedinIcon />,
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/hr-pixeldart-1b8351271/',
    },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="bg-footer-background bg-no-repeat">
        <div className="max-w-screen-xl w-90% m-auto">
          <div className="flex flex-col pt-10 md:pt-20 lg:pt-48">
            <div className="flex flex-col md:flex-row md:justify-between bg-blackBlue dark:bg-darkbg p-3 md:p-16 lg:px-24 lg:py-20  rounded-rounded-13.33px">
              <div className="pb-3 flex flex-col justify-start items-start md:justify-start md:items-start">
                <h3 className="text-white font-normal text-xl md:leading-9 md:text-3xl lg:text-2xl md:pb-2 pb-4 pt-4 md:pt-0">
                  Let’s Discuss Your Project Needs
                </h3>
                <p className="text-white font-light text-base lg:text-base lg:tracking-[0.34px] lg:leading-8">
                  Web and mobile development service
                </p>
              </div>

              <div className="flex items-center pb-4">
                <Link
                  href={'/contactus'}
                  className="lg:py-4 lg:px-20 lg:text-xl py-1 px-4 shadow-customShadow  bg-white rounded-full  text-textPrimary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="pt-10 flex flex-col gap-10 lg:gap-11 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:grid-rows-1">
              <div className="flex flex-col w-full group">
                <div className="group-hover:flex hidden">
                  <AddressPopup />
                </div>

                <p className="text-blackBlue text-xl w-fit font-normal tracking-1% leading-8 mb-3 border-b-2 border-blackBlue">
                  Address
                </p>
                <p className="font-normal lg:text-lg tracking-1% leading-8 hover:w-full hover:h-full hover:  text-blackBlue">
                  ProMoon Software Service <br />
                  408,Silver stone
                  <br /> Arcade, Singanpor Rd,
                  <br /> Omkar Society, Riddhi
                  <br />
                  Siddhi Society, Singanpor, Surat
                </p>
              </div>
              <div className="flex flex-col  w-full">
                <p className="text-blackBlue text-xl w-fit font-normal tracking-1% leading-8   mb-3  border-b-2 border-blackBlue">
                  Services
                </p>

                <ul className="font-normal lg:text-lg tracking-1% leading-8  text-blackBlue">
                  {FOOTER_SERVICE.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2 hover:text-blue transition-colors duration-100 ease-in-out"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-blackBlue text-xl w-fit font-normal leading-6 mb-3 tracking-1% border-b-2 border-blackBlue">
                  Resources
                </p>

                <ul className="font-normal lg:text-lg tracking-1% leading-8 text-blackBlue">
                  {FOOTER_RESOURCES.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2 hover:text-blue transition-colors duration-100 ease-in-out"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-blackBlue text-xl w-fit font-normal leading-6 mb-3 tracking-1% border-b-2 border-blackBlue">
                  Information
                </p>

                <ul className="font-normal lg:text-lg w-full tracking-1% leading-6 text-blackBlue">
                  {FOOTER_INFORMATION.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2 hover:text-blue transition-colors duration-100 ease-in-out pb-1"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-full flex justify-center md:pr-20 lg:pr-14 mt-4 pb-4 border-blackBlue sm:items-center  sm:justify-end  lg:justify-end gap-7">
              {SOCIAL_MEDIA_ICONS.map(({ icon, id, href }) => {
                return (
                  <Link
                    key={id}
                    target="_blank"
                    className="hover:text-blue"
                    href={href}
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Services;
