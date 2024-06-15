import { useState } from "react";

const Popup: React.FC<{ title: string }> = ({ title }) => {
  const [isClose, setIsClose] = useState(false);

  const onClose = () => {
    setIsClose(!isClose);
  };

  return (
    <div
      className={`max-w-screen-xl w-90% z-50 ${
        isClose ? "popUpSlideDownToUp" : ""
      }   fixed top-4 left-4 md:w-[50%] md:left-52 lg:w-[40%] lg:left-80 xl:w-xl[50%] xl:left-450px mx-auto  bg-primary flex justify-between popUpSlideUpToDown   rounded-md  p-2 `}
    >
      <div>
        <p className="text-white text-base">{title}</p>
      </div>
      <div>
        <button onClick={onClose} className="pl-5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
          >
            <path d="M0.707107 15.1214C1.09763 15.5119 1.7308 15.5119 2.12132 15.1214L14.8492 2.39349C15.2398 2.00297 15.2398 1.3698 14.8492 0.979278C14.4587 0.588754 13.8256 0.588753 13.435 0.979278L0.707107 13.7072C0.316583 14.0977 0.316582 14.7309 0.707107 15.1214Z"></path>
            <path d="M0.707107 0.7072C1.09763 0.316676 1.7308 0.316676 2.12132 0.7072L14.8492 13.4351C15.2398 13.8256 15.2398 14.4588 14.8492 14.8493C14.4587 15.2399 13.8256 15.2399 13.435 14.8493L0.707107 2.12141C0.316583 1.73089 0.316582 1.09772 0.707107 0.7072Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;
