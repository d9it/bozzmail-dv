import React, { useState, useRef } from "react";
import { ToastContext } from "./ToastContext";
import ToastContainer from "./ToastContainer";

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef();

  const showToast = ({ message, subText, type }) => {
    setToast(null);
    clearTimeout(timeoutRef.current);

    setTimeout(() => {
      setToast({ message, subText, type });
      timeoutRef.current = setTimeout(() => setToast(null), 5000);
    }, 10);
  };

  const hideToast = () => {
    setToast(null);
    clearTimeout(timeoutRef.current);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <ToastContainer
          toasts={[toast]}
          hideToast={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};