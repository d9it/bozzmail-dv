// import ReactDOM from 'react-dom';
// import { useEffect, useRef, useState } from 'react';

// const DropdownWithPortal = ({ isOpen, tableRef, triggerRef, ref, children, offset = 8, onClose, isModalOpen = false ,className = '', minWidth }) => {
//   const innerRef = useRef(null);
//   const dropdownRef = ref || innerRef;

//   const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const calculatePosition = () => {
//     console.log('scroll')
//     const screenWidth = window.innerWidth;
//     console.log(screenWidth);
//     const isMobile = screenWidth < 640;
//     setIsSmallScreen(isMobile);

//     if (!triggerRef?.current || isMobile) return;

//     const rect = triggerRef.current.getBoundingClientRect();
//     const dropdownPadding = 16;

//     // Check if trigger element is visible in viewport
//     const isElementVisible = rect.left >= 0 && rect.right <= screenWidth && rect.top >= 0 && rect.bottom <= window.innerHeight;

//     // If element is not visible or scrolled out of view, hide dropdown
//     if (!isElementVisible || rect.left < 0) {
//       setPosition({
//         top: -9999,
//         left: -9999,
//         width: 0,
//       });
//       return;
//     }

//     // Use viewport-relative positioning instead of absolute positioning
//     const dropdownWidth = Math.min(rect.width, screenWidth - dropdownPadding * 2);
//     let left = rect.left;
    
//     // Ensure dropdown stays within viewport bounds
//     const maxAllowedLeft = screenWidth - dropdownPadding - dropdownWidth;
    
//     if (left > maxAllowedLeft) {
//       left = Math.max(dropdownPadding, maxAllowedLeft);
//     }
    
//     // Ensure minimum left position
//     left = Math.max(left, dropdownPadding);

//     setPosition({
//       top: rect.bottom + offset,
//       left,
//       width: dropdownWidth,
//     });
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         triggerRef?.current &&
//         !triggerRef.current.contains(event.target)
//       ) {
//         onClose?.();
//       }
//     };

//     if (isOpen) {
//       calculatePosition();
//       window.addEventListener('resize', calculatePosition);
//       window.addEventListener('scroll', calculatePosition, true);
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       window.removeEventListener('resize', calculatePosition);
//       window.removeEventListener('scroll', calculatePosition, true);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const dropdownContent = (
//     <div
//       ref={dropdownRef}
//       className={`form-dropdown-menu ${className}`}
//       style={
//         isSmallScreen
//           ? { position: 'static', minWidth: '250px' }
//           : {
//               position: 'fixed',
//               top: position.top,
//               left: position.left,
//               width: position.width,
//               minWidth: minWidth,
//               maxWidth: 'calc(100vw-32px)',
//               zIndex: isModalOpen ? 1005 : 9999,
//               boxSizing: 'border-box',
//               marginTop: '0',
//             }
//       }
//     >
//       {children}
//     </div>
//   );

//   // For small screens, render inside DOM directly
//   if (isSmallScreen) return dropdownContent;

//   const mount = document.getElementById('dropdown-root');
//   if (!mount) return null;

//   return ReactDOM.createPortal(dropdownContent, mount);
// };

// export default DropdownWithPortal;


import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';

const DropdownWithPortal = ({
  isOpen,
  triggerRef,
  ref,
  children,
  offset = 8,
  onClose,
  isModalOpen = false,
  className = '',
  minWidth,
}) => {
  const innerRef = useRef(null);
  const dropdownRef = ref || innerRef;

  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const calculatePosition = () => {
    if (isModalOpen) return;
    if (!isOpen || !triggerRef?.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tableContainer = triggerRef.current.closest('.table-content, .overflow-x-auto')?.getBoundingClientRect();

    if (!tableContainer) return;

    // 1. Check if trigger is visible in table's scrollable area
    const isTriggerVisible =
      triggerRect.left >= tableContainer.left &&
      triggerRect.right <= tableContainer.right &&
      triggerRect.top < window.innerHeight &&
      triggerRect.bottom > 0;

    if (!isTriggerVisible) {
      setIsVisible(false);
      return;
    }

    // 2. Calculate position (viewport-relative)
    const dropdownWidth = Math.max(triggerRect.width, parseInt(minWidth) || 152);
    let left = triggerRect.left;
    const top = triggerRect.bottom + window.scrollY + offset;

    // 3. Keep within table bounds
    if (left + dropdownWidth > tableContainer.right + window.scrollX) {
      left = Math.max(tableContainer.left + window.scrollX, triggerRect.right - dropdownWidth);
    }

    if (left < tableContainer.left + window.scrollX) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setPosition({ top, left, width: dropdownWidth });
  };

  useEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    const handleResizeScroll = () => {if (isModalOpen) return;calculatePosition()};

    window.addEventListener('resize', handleResizeScroll);
    window.addEventListener('scroll', handleResizeScroll, true);

    const handleClickOutside = (event) => {
      if (isModalOpen) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResizeScroll);
      window.removeEventListener('scroll', handleResizeScroll, true);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen,isModalOpen]);

  if (!isOpen || !isVisible) return null;

  const dropdownContent = (
    <div
      ref={dropdownRef}
      className={`form-dropdown-menu ${className}`}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: position.width,
        minWidth,
        maxWidth: 'calc(100vw - 32px)',
        zIndex: isModalOpen ? 60 : 10,
        boxSizing: 'border-box',
        pointerEvents: 'auto',
        // boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        // borderRadius: '8px',
      }}
    >
      {children}
    </div>
  );

  const mount = document.getElementById('dropdown-root');
  if (!mount) return null;

  return ReactDOM.createPortal(dropdownContent, mount);
};

export default DropdownWithPortal;