import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BottomNavigationProps {
  currentPage: number;
  totalPages: number;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ totalPages }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageNumber = (path: string): number => {
    switch (path) {
      case '/': return 1;
      case '/login': return 2;
      case '/create-account': return 3;
      case '/account-settings': return 4;
      default: return 1;
    }
  };

  const currentPageNum = getPageNumber(location.pathname);

  const goToPrevious = () => {
    switch (location.pathname) {
      case '/login': navigate('/'); break;
      case '/create-account': navigate('/login'); break;
      case '/account-settings': navigate('/create-account'); break;
      default: break;
    }
  };

  const goToNext = () => {
    switch (location.pathname) {
      case '/': navigate('/login'); break;
      case '/login': navigate('/create-account'); break;
      case '/create-account': navigate('/account-settings'); break;
      default: break;
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          className={`p-3 rounded-full transition-all duration-200 ${
            currentPageNum === 1 
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
              : 'bg-[#6C25FF] text-white hover:bg-opacity-90 active:scale-95 shadow-lg'
          }`}
          disabled={currentPageNum === 1}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Indicator - Removed */}
        <div className="flex items-center space-x-2">
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goToNext}
          className={`p-3 rounded-full transition-all duration-200 ${
            currentPageNum === totalPages 
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
              : 'bg-[#6C25FF] text-white hover:bg-opacity-90 active:scale-95 shadow-lg'
          }`}
          disabled={currentPageNum === totalPages}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
