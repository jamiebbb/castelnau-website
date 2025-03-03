
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from '@/layouts/MainLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4 text-castelnau-green">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-castelnau-green hover:text-castelnau-darkgreen transition-colors underline">
            Return to Home
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
