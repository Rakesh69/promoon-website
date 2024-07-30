import React from 'react';
import Link from 'next/link';

const CookiePolicy = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <div className="pt-36 pb-32 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
          <div className="flex flex-col justify-between md:px-0 px-4">
            <h1 className="text-4xl font-bold text-white text-center">
              Cookies Policy
            </h1>
            <p className="text-white text-center mt-8">
              Recent date of update: 07/15/2024
            </p>
          </div>
        </div>
        <div className="container mx-auto md:px-12 xl:px-5 px-5 py-16  ">
          <div className="mb-16">
            <h2 className="text-black text-2xl md:text-4xl font-bold relative w-fit ">
              {' '}
              Introduction <div className="border-animation" />
            </h2>
            <p className="text-black text-base font-normal pt-4">
              {' '}
              This Cookies Policy provides an overview of how we utilize cookies
              on our website. We encourage you to review this policy to gain
              insight into the types of cookies we deploy, the data collected
              via cookies, and how we utilize that data. This policy has been
              formulated using a Cookies Policy Generator.
              <p className="py-4">
                Cookies typically do not contain personal information that can
                identify a user. However, any personal data we retain about you
                may be associated with the information gathered and stored
                through cookies. For comprehensive details on how we utilize,
                secure, and manage your personal data, please refer to our
                Privacy Policy.
              </p>{' '}
              Cookies are categorized as either 'Persistent' or 'Session'
              Cookies. Persistent Cookies remain stored on your personal
              computer or mobile device after you've gone offline, while Session
              Cookies are automatically deleted as soon as you close your web
              browser.
            </p>
          </div>
          <div className="">
            <h2 className="text-black text-2xl md:text-4xl font-bold  relative w-fit ">
              Your Choices Regarding Cookies
              <div className="border-animation" />
            </h2>
            <p className="text-black text-base font-normal pt-4">
              If you prefer not to enable Cookies on the Website, you must
              disable them in your browser settings and delete any associated
              Cookies stored in your browser. You can exercise this option to
              prevent Cookie usage at any time.
            </p>
            <p className="text-black text-base font-normal pt-2">
              Declining our Cookies may result in certain inconveniences while
              using the Website, and specific features may not function
              correctly.
            </p>
            <p className="text-black text-base font-normal pt-4">
              To delete or refuse Cookies, please refer to the help section of
              your web browser:
            </p>
          </div>
          <ul className="pl-8 pt-4 list-disc">
            <li className="text-base font-normal text-black pt-2">
              For Google Chrome, visit Google's
              <a
                href="https://support.google.com/accounts/answer/32050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline ml-1"
              >
                Cookie Settings Guide.
              </a>
            </li>

            <li className="text-base font-normal text-black pt-2">
              For Microsoft Internet Explorer, visit Microsoft's
              <a
                href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline ml-1"
              >
                Cookie Settings Guide.
              </a>{' '}
            </li>
            <li className="text-base font-normal text-black pt-2">
              For Mozilla Firefox, visit Mozilla's
              <a
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline ml-1"
              >
                Cookie Settings Guide.
              </a>{' '}
            </li>
            <li className="text-base font-normal text-black pt-2">
              For Apple Safari, visit Apple's
              <a
                href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline ml-1"
              >
                Cookie Settings Guide.
              </a>{' '}
            </li>
          </ul>
          <div className="mb-16">
            <p className="text-black text-base font-normal pt-4">
              For other web browsers, please consult their respective support
              pages.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-black text-2xl md:text-4xl font-bold relative w-fit">
              Contact Us <div className="border-animation" />
            </h2>
            <p className="text-black text-base font-normal pt-4">
              {' '}
              If you have any questions about these Terms, please contact us at:
              info@promoonsoft.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
