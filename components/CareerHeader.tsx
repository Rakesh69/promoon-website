import RightArrow from "@/icons/RightArrow";
import Image from "next/image";
import bottomOurProcessBgImage from "@/public/assets/ourProcessBottomBackground.png";
import darkBottombgWaves from "@/public/assets/darkBottombgWaves@2x.png";

const CareerHeader: React.FC<{ id: string }> = ({ id }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <>
      <div className="px-1 dark:bg-darkbg">
        <section className="h-full w-full md:bg-career-Background dark:md:bg-career-DarkBackground bg-cover bg-no-repeat lg:bg-cover bg-center">
          <div className="max-w-screen-xl w-90% mx-auto">
            <div className="flex flex-col justify-center items-center gap-6 py-20 lg:py-52">
              <div className=" flex justify-center items-center">
                <p className="text-3xl lg:text-5xl font-bold lg:font-extraboldte xt-textPrimary dark:text-white text-center">
                  Start Your
                  <br className="sm:hidden" />
                  <span className="text-primary"> Career </span>with Us
                </p>
              </div>
              <div>
                <p className="text-base lg:text-2xl text-textSecondary dark:text-darkTextPrimary text-center md:px-40">
                  We are passionate about Webflow Development. We are
                  <br className="hidden sm:block lg:block" /> looking for
                  talented and motivated individuals who
                  <br className="hidden sm:block lg:block" /> share our vision
                  and want to be part of a dynamic and{" "}
                  <br className="hidden sm:block lg:block" />
                  innovative team.
                </p>
              </div>
              <div className="mt-2">
                <div
                  onClick={() => {
                    scrollTo(id);
                  }}
                  className="bg-send-bg-btn cursor-pointer rounded-full lg:text-2xl text-white  px-12 py-2 lg:px-14 lg:py-4"
                >
                  <button className="flex items-center gap-3">
                    See Positions
                    <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky z-50">
            <Image
              src={bottomOurProcessBgImage}
              alt="topOurProcessBgImage"
              className="dark:hidden block"
            />
            <Image
              src={darkBottombgWaves}
              alt="DarkOurProcessBg"
              className="hidden dark:block"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerHeader;
