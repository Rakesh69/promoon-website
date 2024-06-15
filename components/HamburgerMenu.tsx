import { useMenu } from "@/context/menu-context";
import { useRouter } from "next/router";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import SunIcon from "@/icons/SunIcon";
import MoonIcon from "@/icons/MoonIcon";

const HamburgerMenu: React.FC = () => {
  const { theme, toggleMode } = useTheme();
  const router = useRouter();
  const { currentUser, setCurrentUser } = useMenu();
  return (
    <>
      {currentUser && (
        <div className="fixed slideInLeft top-70px border-t z-40 bg-white dark:bg-darkbg h-full w-full lg:hidden">
          <div className="max-w-screen-xl w-90% m-auto">
            <ul className="text-xl leading-30px font-medium md:leading-48px">
              <li className="my-6 slideInLeftMenues">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push("/");
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Home
                </button>
              </li>
              <li className="my-6 slideInLeftMenues1">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push("/ourprocess");
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Our Process
                </button>
              </li>
              <li className="my-6 slideInLeftMenues2">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push("/contactus");
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Contact US
                </button>
              </li>
              <li className="my-6 slideInLeftMenues3">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push("/career");
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Career
                </button>
              </li>
              {/* <li className="my-6 slideInLeftMenues4">
                <div className=" ">
                  <label className="switch">
                    <span className="sun">
                      <SunIcon />
                    </span>
                    <span className="moon">
                      <MoonIcon />
                    </span>
                    <input
                      type="checkbox"
                      className="input"
                      checked={theme === 'dark'}
                      onChange={toggleMode}
                    />

                    <span className="slider"></span>
                  </label>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
