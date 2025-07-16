import  { useRef, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
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
    <div className="fixed inset-0 z-100000 flex items-start justify-center bg-model-bg min-h-screen overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-20px p-15 lg:p-30 shadow-box w-full max-w-3xl relative mx-15 my-200 sm:my-160">

        <button onClick={onClose} className="absolute top-20 right-20 cursor-pointer focus:outline-none bg-white">
                <img src="asset/icons/cross.svg" alt="icon" className='h-24' />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
