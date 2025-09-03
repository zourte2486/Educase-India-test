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
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          disabled={currentPageNum === 1}
        >
          <svg 
            className={`w-5 h-5 ${currentPageNum === 1 ? 'text-gray-300' : 'text-popx-dark'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Indicator - Removed */}
        <div className="flex items-center space-x-2">
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goToNext}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          disabled={currentPageNum === totalPages}
        >
          <svg 
            className={`w-5 h-5 ${currentPageNum === totalPages ? 'text-gray-300' : 'text-popx-dark'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
