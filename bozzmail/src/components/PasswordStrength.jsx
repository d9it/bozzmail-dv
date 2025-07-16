import React from 'react';

const PasswordStrength = ({ password }) => {
  const getStrength = (password) => {
    if (!password) return { score: 0, label: '', color: '' };
    
    let score = 0;
    const checks = [
      password.length >= 8,
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      /[^A-Za-z0-9]/.test(password)
    ];
    
    score = checks.filter(Boolean).length;
    
    if (score <= 1) return { score, label: 'Very Weak', color: 'bg-red-500' };
    if (score <= 2) return { score, label: 'Weak', color: 'bg-orange-500' };
    if (score <= 3) return { score, label: 'Fair', color: 'bg-yellow-500' };
    if (score <= 4) return { score, label: 'Good', color: 'bg-blue-500' };
    return { score, label: 'Strong', color: 'bg-green-500' };
  };

  const strength = getStrength(password);
  const segments = 5;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {Array.from({ length: segments }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded ${
              i < strength.score ? strength.color : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      {password && (
        <p className={`text-xs ${
          strength.score <= 2 ? 'text-red-500' :
          strength.score <= 3 ? 'text-orange-500' :
          strength.score <= 4 ? 'text-blue-500' : 'text-green-500'
        }`}>
          {strength.label}
        </p>
      )}
    </div>
  );
};

export default PasswordStrength; 