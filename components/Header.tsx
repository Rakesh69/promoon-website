import { useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';

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
    <>
      <main
        className={`bg-header-background dark:bg-dark-header-background dark:bg-white md:py-14 bg-no-repeat bg-top bg-cover w-full h-full" ${
          currentUser ? 'overflow-hidden' : ''
        } object-center bg-cover w-full h-full`}
      >
        <HamburgerMenu />
        <div className="max-w-screen-xl w-90% m-auto">
          <div className="flex flex-col gap-5 justify-center items-center h-screen text-center">
            <div className="text-xl font-semibold py-5">
              <h3 className="text-2xl headerTitle md:text-4xl lg:text-5xl antialiased text-textPrimary dark:text-white font-semibold ">
                ProMoon is a leading information technology company
                <br className="hidden lg:block text-textPrimary dark:text-white" />
                specializing in innovative software solutions
              </h3>
            </div>

            <div className="font-normal w-full headerDescription tracking-tight">
              <p className="text-xl md:text-xl text-textPrimary dark:text-white">
                Form custom software development and web applications to
                powerful hardware platforms,
                <br className="hidden lg:block" /> ProMoon has the tools and
                expertise to help businesses leverage the latest technology to
                <br className="hidden lg:block" /> accelerate their growth.
              </p>
            </div>

            <div className="bg-send-bg-btn rounded-full hover:bg-white hover:text-textPrimary hover:transition-all duration-500 lg:text-xl text-white px-5 py-2 lg:px-12 lg:py-4">
              <button
                className="flex items-center hover:changeBg justify-center gap-3"
                onClick={() => {
                  router.push('/contactus');
                }}
              >
                <p>Let’s Discuss</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
