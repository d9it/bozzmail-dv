/* (main code) for only normal dropdowns and it will not work for dropdowns inside table

import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, toggle, close, ref };
};

export default useDropdown; 

*/

// work for both normal dropdowns and dropdowns inside table
// useeffect for the import mail review table

import { useState, useEffect, useRef } from 'react';

const activeDropdownMap = new Map(); // key: scopeId (DOM-based), value: setIsOpen()

const useDropdown = ({ hasTriggerRef = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const triggerRef = hasTriggerRef ? useRef(null) : null;

  const getScopeId = () => {
    // Find closest modal or fallback to 'global'
    const root = ref.current?.closest('.modal-wrapper') || document.body;
    return root.dataset.scopeId || 'global';
  };

  const open = () => {
    const scopeId = getScopeId();
    const currentActive = activeDropdownMap.get(scopeId);
    if (currentActive && currentActive !== setIsOpen) {
      currentActive(false);
    }
    setIsOpen(true);
    activeDropdownMap.set(scopeId, setIsOpen);
  };

  const close = () => {
    const scopeId = getScopeId();
    if (activeDropdownMap.get(scopeId) === setIsOpen) {
      activeDropdownMap.delete(scopeId);
    }
    setIsOpen(false);
  };

  const toggle = () => (isOpen ? close() : open());

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedOutsideDropdown = ref.current && !ref.current.contains(e.target);
      const clickedOutsideTrigger =
        !triggerRef || (triggerRef.current && !triggerRef.current.contains(e.target));

      if (isOpen && clickedOutsideDropdown && clickedOutsideTrigger) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!hasTriggerRef || !isOpen) return;

    const handleTableScroll = (e) => {
      const el = e.target;
      if (el.classList?.contains('table-scroll')) {
        close();
      }
    };

    document.addEventListener('scroll', handleTableScroll, true);
    return () => {
      document.removeEventListener('scroll', handleTableScroll, true);
    };
  }, [isOpen, hasTriggerRef]);

  return {
    isOpen,
    toggle,
    open,
    close,
    setIsOpen,
    ref,
    triggerRef,
  };
};

export default useDropdown;

