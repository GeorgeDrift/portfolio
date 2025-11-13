
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent border-t border-white/30 mt-20">
      <div className="container mx-auto py-6 text-center text-white">
        <p className="text-shadow-dark font-medium">
          &copy; {currentYear}{' '}
          <span className="font-bold text-sky-400">
            George David Tembo
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
