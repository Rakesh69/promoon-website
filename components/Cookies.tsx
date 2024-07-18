import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 

const Cookies = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsAccepted(true);
  };

  if (isAccepted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-white p-4 border-y border-gray-400">
      <div className="text-black text-center flex justify-between">
        <div className="w-1/2">
          <p>
            We use cookies to personalise content and ads, to provide social
            media features and to analyse our traffic. We also disclose
            information about your use of our site with our social media,
            advertising and analytics partners. Additional details are available
            in our
            <Link
              href="/cookie-policy"
              className="text-black font-bold"
            >
              {' '}
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div>
          <button
            onClick={handleAccept}
            className="bg-blue text-white px-4 py-2 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
