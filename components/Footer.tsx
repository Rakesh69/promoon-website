import FooterLogoIcon from '@/icons/FooterLogoIcon';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col border-t-[1.5px] border-blackBlue/20 dark:border-darkBorder justify-center items-center py-8 dark:bg-darkbg">
        <div className="dark:hidden block">
          <FooterLogoIcon />
        </div>

        <div className="hidden dark:block">
          <ProMoonLogoDark />
        </div>

        <h3 className="text-textPrimary font-bold text-base lg:text-base lg:tracking-0.14px pt-2 dark:text-white">
          Web and mobile development service
        </h3>
        <p className="text-textSecondary lg:text-sm lg:leading-7 pt-2 md:pt-0">
          © Copyright 2023 - ProMoon
        </p>
      </div>
    </>
  );
};

export default Footer;
