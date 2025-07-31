import { useRef, useEffect } from "react";

const Modal = ({ isOpen, onClose, children, maxWidth = "max-w-3xl" }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-start justify-center bg-model-bg min-h-screen overflow-y-auto">
      <div className="flex justify-center items-center w-full min-h-screen py-100 xl:py-20">
      {/* <div className="flex justify-center items-center w-full min-h-screen py-200 sm:py-160"> */}
        <div ref={modalRef} className={`bg-white rounded-20px p-15 sm:p-30 shadow-box w-full ${maxWidth} relative mx-15`}>

          <button onClick={onClose} className="absolute top-15 right-15 sm:top-20 sm:right-20 cursor-pointer focus:border-none bg-white">
            <img src="asset/icons/cross.svg" alt="icon" className='h-24' />
          </button>
          <div className="modal-wrapper" data-scope-id="modal">
            {children}
          </div>
          {/* {children} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
