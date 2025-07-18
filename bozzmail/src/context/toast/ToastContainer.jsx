import Toast from "./Toast";

const ToastContainer = ({ toasts, hideToast }) => {
  return (
    <div>
      {toasts.map((toast,index) => (
        <Toast
          key={toast.id || index}
          message={toast.message}
          subText={toast.subText}
          type={toast.type || "success"}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;