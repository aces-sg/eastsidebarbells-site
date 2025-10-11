import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-8 h-8 relative">
      <div className="w-4 h-4 left-0 top-0 absolute bg-yellow-200" />
      <div className="w-2 h-2 left-[16px] top-0 absolute bg-lime-200" />
      <div className="w-4 h-4 left-[16px] top-[16px] absolute bg-blue-100" />
      <div className="w-4 h-4 left-0 top-[16px] absolute bg-blue-100" />
    </div>
  );
};

export default Logo;
