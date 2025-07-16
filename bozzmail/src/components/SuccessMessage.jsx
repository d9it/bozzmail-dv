import React from 'react';
import { NavLink } from 'react-router';

const SuccessMessage = ({ title, message, actionText, actionLink, onAction }) => {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center p-16">
      <div className="max-w-md mx-auto bg-white p-30 rounded-20px text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-main-text mb-2">{title}</h2>
          <p className="text-gray-600">{message}</p>
        </div>
        
        {actionText && actionLink && (
          <NavLink 
            to={actionLink}
            className="primary-btn w-full block"
          >
            {actionText}
          </NavLink>
        )}
        
        {actionText && onAction && (
          <button 
            onClick={onAction}
            className="primary-btn w-full"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SuccessMessage; 