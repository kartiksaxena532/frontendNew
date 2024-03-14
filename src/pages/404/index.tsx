import React from 'react';
import NotFoundImage from './404-error.png'; // Import the image

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={NotFoundImage} alt="404" className='w-1\/2'/> {/* Use the imported image */}
      <h1 className="text-4xl font-bold text-green-200">404 - Page Not Found</h1>
      <p className="text-lg text-gray-500">The page you are looking for does not exist.</p>
    </div>
  );
}