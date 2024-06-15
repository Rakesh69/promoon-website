import Link from "next/link";
import { useMenu } from "@/context/menu-context";
import { useRouter } from "next/router";
import PromoonLogo from "@/icons/ProMoonLogo";
import { useTheme } from "@/context/ThemeContext";
import ProMoonLogoDark from "@/icons/ProMoonLogoDark";
import ResponsiveNavbar from "@/icons/ResponsiveNavbar";
import ResponsiveCloseIcon from "@/icons/ResponsiveCloseIcon";

const NAV_MENUES: {
  id: number;
  menu: string;
  path: string;
}[] = [
  {
    id: 1,
    menu: "Home",
    path: "/",
  },
  {
    id: 2,
    menu: "Our Process",
    path: "/ourprocess",
  },
  {
    id: 3,
    menu: "Contact US",
    path: "/contactus",
  },
  {
    id: 4,
    menu: "Career",
    path: "/career",
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  const { currentUser, setCurrentUser } = useMenu();
  const { theme, toggleMode } = useTheme();

  return (
    <>
      <nav
        className={`w-full fixed bg-white dark:bg-darkbg top-0 border-b border-blackBlue/20 dark:border-darkBorder z-50`}
      >
        <div className="max-w-screen-xl w-90% h-[70px]  m-auto flex">
          <div className="w-full flex items-center justify-between">
            <div>
              {theme === "light" ? <PromoonLogo /> : <ProMoonLogoDark />}
            </div>
            <div>
              <ul className="lg:flex hidden gap-10 font-bold  text-textPrimary">
                {NAV_MENUES &&
                  NAV_MENUES.length &&
                  NAV_MENUES.map(({ menu, path }, index) => {
                    return (
                      <li
                        className="py-5 dark:hover:text-blue hover:text-blue hover:transition duration-300 dark:text-white  ease-in"
                        key={index}
                      >
                        <Link href={path}>{menu}</Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => {
                  setCurrentUser(!currentUser);
                }}
              >
                {currentUser ? <ResponsiveCloseIcon /> : <ResponsiveNavbar />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
