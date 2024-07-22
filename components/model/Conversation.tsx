import RightArrow from '@/icons/RightArrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import AddressPopup from '../AddressPopup';
import FacebookIcon from '@/icons/FacebookIcon';
import InstragramIcon from '@/icons/InstragramIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import NewTwiterIcon from './../../icons/NewTwiterIcon';
import NewFaceBookIcon from '@/icons/NewFaceBookIcon';

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
    href: 'https://www.facebook.com/profile.php?id=100091227716427',
  },
  {
    id: 2,
    icon: <NewTwiterIcon />,
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
const Conversation = () => {
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
    <div className="container mx-auto py-9">
      <div className="flex justify-between lg:flex-row flex-col">
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInLeft1' : ''
          } flex flex-col text-white px-4 pb-4`}
        >
          <h2 className="text-4xl pb-6">Like what you see?</h2>
          <h2 className="text-4xl pb-6"> Let’s start a conversation.</h2>
          <div className="py-10">
            <button className="bg-send-bg-btn rounded-full text-center lg:text-xl text-white  px-12 py-2 md:py-4 lg:px-14 lg:py-4 w-fit">
              <Link
                href={`/hiringform`}
                className="flex gap-3"
              >
                Get Started
                <RightArrow />
              </Link>
            </button>
          </div>
          <p className="pb-5 text-lg">Visit us at</p>
          <div className="flex flex-row gap-4 ">
            <div className="text-white pt-16">
              {' '}
              <Image
                src={'/assets/india-flag.jpg'}
                alt={'image'}
                width={50}
                height={50}
              />
            </div>
            <div className="text-white lg:text-2xl text-xl lg:leading-[52px] group">
              <div className="group-hover:flex hidden">
                <AddressPopup />
              </div>
              408, ProMoon Software Service ,<br></br>Silver stone Arcade,{' '}
              Singanpor Rd, Near d-Mart, Surat
            </div>
          </div>
          <div
            ref={sectionRef}
            className="flex lg:gap-14 gap-10 pt-16"
          >
            {' '}
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
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'md:slideInRight1' : ''
          } flex lg:flex-col flex-row text-white px-4`}
        >
          <Image
            src={'/assets/silverstonenewimage.jpg'}
            alt={'image'}
            width={800}
            height={100}
            className="lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
