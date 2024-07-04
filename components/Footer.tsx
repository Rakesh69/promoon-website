import FacebookIcon from '@/icons/FacebookIcon';
import FooterLogoIcon from '@/icons/FooterLogoIcon';
import InstragramIcon from '@/icons/InstragramIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';
import TwitterIcon from '@/icons/TwitterIcon';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Footer = () => {
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
    <>
      <div className="flex flex-col border-t-[1.5px] border-blackBlue/20 dark:border-darkBorder justify-center items-center py-7 dark:bg-bg-colors-background">
        <div className="dark:hidden block">
          <FooterLogoIcon />
        </div>

        <div className="hidden dark:block">
          <ProMoonLogoDark />
        </div>

        <h3 className="text-textPrimary font-bold text-[15px]  lg:tracking-0.14px pt-4 dark:text-white">
          Web and mobile development service
        </h3>
        <p className="text-textSecondary text-[13.5px] lg:leading-7 pt-2 md:pt-1">
          © Copyright 2023 - ProMoon
        </p>

        <div className="w-full flex justify-center pt-[15px] border-blackBlue items-center  gap-[30px]">
          {SOCIAL_MEDIA_ICONS.map(({ icon, id, href }) => {
            return (
              <Link
                key={id}
                className="hover:text-blue"
                href={'#'}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
