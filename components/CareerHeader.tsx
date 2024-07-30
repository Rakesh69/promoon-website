import RightArrow from '@/icons/RightArrow';
import Image from 'next/image';

const CareerHeader: React.FC<{ id: string }> = ({ id }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <>
      <div className="px-1 lg:pt-11 md:pt-0 pt-8 text-center">
        <section className="h-auto w-auto bg-no-repeat lg:bg-cover bg-contain bg-center 2xl:pt-36 md:bg-image-background flex flex-col justify-center items-center">
          <div className="max-w-screen-xl w-90% mx-auto">
            <div className="slideInDown flex flex-col justify-center items-center gap-6 py-20 md:py-32 2xl:py-52">
              <div className="flex justify-center items-center">
                <p className="text-3xl 2xl:text-5xl font-bold 2xl:font-extrabold text-textPrimary dark:text-white text-center">
                  Start Your
                  <br className="sm:hidden" />
                  <span className="text-primary"> Career </span>with Us
                </p>
              </div>
              <div>
                <p className="text-base lg:text-xl text-textSecondary dark:text-darkTextPrimary text-center md:px-40">
                  We are passionate about Webflow Development. We are
                  <br className="hidden sm:block lg:block" /> looking for
                  talented and motivated individuals who
                  <br className="hidden sm:block lg:block" /> share our vision
                  and want to be part of a dynamic and
                  <br className="hidden sm:block lg:block" /> innovative team.
                </p>
              </div>
              <div className="mt-2">
                <div
                  onClick={() => {
                    scrollTo(id);
                  }}
                  className="bg-send-bg-btn cursor-pointer rounded-full lg:text-2xl text-white py-4 px-[68px] "
                >
                  <button className="flex items-center gap-3">
                    See Positions
                    <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerHeader;
