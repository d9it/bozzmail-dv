import { useEffect, useState } from "react";

const Toast = ({ message, subText, onClose, type = "success" }) => {
  const iconSrc =
    type === "error"
      ? "/asset/icons/error-cross.svg"
      : "/asset/icons/success.svg";

  // Progress bar color
  const progressColor = type === "error" ? "bg-negative-warning" : "bg-primary";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timeout);
  }, [message, subText, type]);

  return (
    <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-1005">
      <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
          <img src={iconSrc} alt="icon" className="h-20 flex-none" />
          <div>
            <p className="text-main-text font-semibold pb-2">{message}</p>
            <p className="text-secondary-text text-sm font-medium">{subText}</p>
          </div>
        </div>
        {/* Animated progress bar */}
        <div
          className={`absolute left-0 bottom-0 h-3 transition-all duration-[5000ms] ${progressColor} ${animate ? 'w-full' : 'w-0'}`}
        ></div>
        {/* cross alert */}
        <img
          src="/asset/icons/cross.svg"
          alt="icon"
          className="h-16 flex-none absolute top-12 right-24 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Toast;