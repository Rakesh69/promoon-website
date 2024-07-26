import FacebookIcon from '@/icons/FacebookIcon';
import FooterLogoIcon from '@/icons/FooterLogoIcon';
import InstragramIcon from '@/icons/InstragramIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';
import Link from 'next/link';
import { useState } from 'react';
import AddressPopup from './AddressPopup';
import { useHiring } from '@/context/Hiring-Context';
import { useRouter } from 'next/router';
import NewTwiterIcon from './../icons/NewTwiterIcon';
import NewFaceBookIcon from '@/icons/NewFaceBookIcon';

const Footer = () => {
  const SOCIAL_MEDIA_ICONS: {
    id: number;
    icon: React.ReactNode;
    name: string;
    href: string;
  }[] = [
    {
      id: 1,
      icon: <NewFaceBookIcon />,
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61562583162466',
    },
    {
      id: 2,
      icon: <NewTwiterIcon />,
      name: 'Twitter',
      href: 'https://twitter.com/HRatProMoonSoft',
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
      href: 'https://www.linkedin.com/in/promoon-software-solution-10b295309/',
    },
  ];

  const FOOTER_SERVICE: { id: number; name: string; route: string }[] = [
    {
      id: 1,
      name: 'Website development',
      route: '/service/websitedevelopment',
    },
    {
      id: 2,
      name: 'Mobile app development',
      route: '/service/mobileappdevelopment',
    },
    {
      id: 3,
      name: 'Search Engine Optimization',
      route: '/service/SearchEngineOptimization',
    },
    { id: 4, name: 'Quality Assurance', route: '/service/QualityAssurance' },
  ];

  const FOOTER_INFORMATION: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Home', route: '/' },
    { id: 2, name: 'Careers', route: 'career' },
    { id: 3, name: 'About ProMoon', route: '/company/aboutus' },
    { id: 4, name: 'Privacy Policy', route: 'PrivacyPolicy' },
    {
      id: 5,
      name: 'Terms and Conditions',
      route: 'TermsandConditions',
    },
    {
      id: 6,
      name: ' Cookie Policy',
      route: 'CookiePolicy',
    },
  ];

  const { isHiring } = useHiring();
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <>
      <div className=" flex flex-col border-t-[1.5px] border-blackBlue/20 dark:border-darkBorder dark:bg-bg-colors-background">
        <div className="container mx-auto px-4 pt-8 pb-7 ">
          <div className="dark:hidden block">
            <FooterLogoIcon />
          </div>

          <div className="hidden dark:block">
            <ProMoonLogoDark />
          </div>

          <div className="pt-[20px]  flex flex-col gap-10 lg:gap-11 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:grid-rows-1">
            <div className="flex flex-col w-full group">
              <div className="group-hover:flex hidden">
                <AddressPopup />
              </div>

              <p className="text-white text-[15px] w-fit font-medium tracking-1% leading-8 mb-6 border-b-2 border-white/40">
                Address
              </p>
              <p className="font-normal text-[15px] tracking-1% leading-8 hover:w-full hover:h-full hover: text-white">
                408, ProMoon Software Service <br />
                Silver stone
                <br /> Arcade, Singanpor Rd,
                <br /> Omkar Society, Riddhi
                <br />
                Siddhi Society, Singanpor, Surat
              </p>
            </div>
            <div className="flex flex-col  w-full">
              <p className="text-white text-[15px] w-fit font-medium tracking-1% leading-8 mb-6 border-b-2 border-white/40">
                Services
              </p>

              <ul className="font-normal text-[15px] tracking-1% leading-8 text-white">
                {FOOTER_SERVICE.map(({ id, name, route }) => {
                  return (
                    <li
                      key={id}
                      className="lg:mb-2.5 hover:text-blue transition-colors duration-100 ease-in-out"
                    >
                      <Link href={`/${route}`}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-white text-[15px] w-fit font-medium leading-6 mb-6 tracking-1% border-b-2 border-white/40">
                Quick Links
              </p>

              <ul className="font-normal text-[15px] w-full tracking-1% leading-6 text-white">
                {FOOTER_INFORMATION.map(({ id, name, route }) => {
                  return (
                    <li
                      key={id}
                      className="lg:mb-2.5 hover:text-blue transition-colors duration-100 ease-in-out pb-1"
                    >
                      <Link
                        className='hover:text-blue relative data-tooltip-target="tooltip-light" data-tooltip-style="light" '
                        onClick={() => handleClick(id)}
                        style={{
                          color: active === id ? '#00B4FF' : 'white',
                        }}
                        href={`/${route}`}
                      >
                        {name}
                        {name === 'Careers' && isHiring && (
                          <div
                            onClick={() => {
                              handleClick(4);
                              router.push('/career');
                            }}
                            id="tooltip-light"
                            role="tooltip"
                            className="absolute z-10  inline-block px-3  text-sm font-medium  w-28 text-gray-900 ml-2  bg-white border border-gray-200 rounded-lg shadow-sm "
                          >
                            we're hiring
                          </div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/40" />
        <div className="w-full border-blackBlue p-4  container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row gap-4 text-white">
              <Link
                href="/TermsandConditions"
                className=" md:border-r border-gray-300 pr-4 md:border-none md:pr-0"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/PrivacyPolicy"
                className=" md:border-r border-gray-300 pr-4 md:border-none md:pr-0"
              >
                Privacy Policy
              </Link>
              <Link
                href="/CookiePolicy"
                className="md:border-none md:pr-0"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="text-white text-center md:text-left mt-4 md:mt-0">
              Copyright © 2024 ProMoon Software Solution. All Rights Reserved.
            </div>
            <div className="flex flex-row gap-4 md:gap-8 mt-4 md:mt-0">
              {SOCIAL_MEDIA_ICONS.map(({ icon, id, href }) => {
                return (
                  <Link
                    key={id}
                    className="hover:text-blue h-30 w-30"
                    href={href}
                  >
                    <div className="h-8 w-8">{icon}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
