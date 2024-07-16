import { useEffect } from 'react';
import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';
import Image from 'next/image';
import StarIcon from '@/icons/StarIcon';
import RightArrow from '@/icons/RightArrow';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  const { currentUser } = useMenu();

  useEffect(() => {
    if (currentUser) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [currentUser]);

  return (
    <div className="container mx-auto overflow-hidden">
      <div
        className={` m-auto relative bg-bg-colors-background h-full ${
          currentUser ? 'overflow-hidden' : ''
        } object-center bg-cover w-full`}
      >
        <Image
          src={'/assets/hero-background-top.png'}
          alt="images"
          height={1000}
          className=" w-full mx-auto absolute top-[80px] h-[190px] Container"
          width={1000}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-24 lg:py-48">
          <div className="flex flex-col w-full lg:w-1/2 px-4 lg:px-0">
            <div className="flex justify-start gap-2.5 border border-white/10 rounded-full bg-borderBlack py-2 px-3 max-w-full lg:w-[264px]">
              <div>
                <StarIcon />
              </div>
              <div className="text-white font-poppins font-medium text-sm">
                New: Our Innovation Software
              </div>
            </div>
            <div className="py-7">
              <p className="md:text-[50px] md:leading-[69px] text-2xl font-poppins font-medium text-white">
                Pr
                <span
                  className="bg-[background: linear-gradient(90deg, #27AAE1 0%, #27AAE1 19.31%, #FFFFFF 46.77%, #066A9D 76.49%, #1C75BC 100%);
]"
                >
                  o
                </span>
                Moon is specializing in innovative software solutions
              </p>
            </div>
            <div className="pb-7">
              <p className="text-white text-base font-normal leading-6">
                ProMoon has the tools and expertise to help businesses leverage
                the latest technology to accelerate their growth.
              </p>
            </div>
            <div className="max-w-full lg:max-w-[170px]">
              <Link
                href={`/contactus`}
                className="flex gap-3 w-auto items-center hover:changeBg justify-center py-3 bg-send-bg-btn rounded-full hover:bg-white hover:text-textPrimary hover:transition-all duration-500 text-base text-white"
              >
                <p>Let’s Discuss</p>
                <RightArrow />
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 relative ">
            <div className="text-white">
              <Image
                src={'/assets/heroSecitionimage.webp'}
                alt="images"
                height={1000}
                className="w-full max-h-[317px] max-w-[257px]"
                width={1000}
              />
            </div>
            <div className="text-white">
              <Image
                src={'/assets/heroSecitionimage.webp'}
                alt="images"
                height={500}
                className="w-full absolute md:right-32  xl:right-48 md:bottom-20 max-h-[317px] max-w-[257px]"
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
