import React from 'react';

const AmazonSpinner = ({ size = 'md' }) => {
  const sizes = { sm: 'h-8 w-8 border-2', md: 'h-12 w-12 border-4', lg: 'h-16 w-16 border-4' };
  return (
    <div className="flex items-center justify-center h-96">
      <div className={`animate-spin rounded-full ${sizes[size]} border-[#febd69] border-t-transparent`} />
    </div>
  );
};

export default AmazonSpinner;
