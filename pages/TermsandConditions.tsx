import React from 'react';
type Detail = {
  subTitle: string;
  detail?: string;
};

type Item = {
  id: number;
  title: string;
  description: string;
  details?: Detail[];
};

const data: Item[] = [
  {
    id: 1,
    title: 'Information We Collect',
    description:
      'We may collect information about you in a variety of ways. The information we may collect on the Website includes:',
    details: [
      {
        subTitle: 'Personal Data:',
        detail:
          'Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website, such as online chat and message boards.',
      },
      {
        subTitle: 'Derivative Data:',
        detail:
          'Information our servers automatically collect when you access the Website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Website',
      },
      {
        subTitle: 'Financial Data:',
        detail:
          'Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Website.',
      },
      {
        subTitle: 'Mobile Device Data:',
        detail:
          'Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Website from a mobile device.',
      },
    ],
  },
  {
    id: 2,
    title: 'Use of Your Information',
    description:
      'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:',
    details: [
      {
        subTitle: 'Create and manage your account.',
      },
      {
        subTitle:
          'Process your transactions and deliver the services you requested.',
      },
      {
        subTitle: 'Improve and personalize your experience on the Website.',
      },
      {
        subTitle: 'Send you emails regarding your account or order.',
      },
      {
        subTitle: 'Enable user-to-user communications.',
      },
      {
        subTitle: 'Respond to your inquiries and offer customer support.',
      },
      {
        subTitle:
          'Monitor and analyze usage and trends to improve your experience with the Website.',
      },
      {
        subTitle: 'Perform other business activities as needed.',
      },
    ],
  },
  {
    id: 3,
    title: 'Disclosure of Your Information',
    description:
      'We may share information we have collected about you in certain situations. Your information may be disclosed as follows:',
    details: [
      {
        subTitle: 'By Law or to Protect Rights:',
        detail:
          'If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.',
      },
      {
        subTitle: 'Third-Party Service Providers:',
        detail:
          'We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.',
      },
      {
        subTitle: 'Business Transfers:',
        detail:
          'We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
      },
      {
        subTitle: 'Marketing Communications:',
        detail:
          'With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.',
      },
    ],
  },
  {
    id: 4,
    title: 'Security of Your Information',
    description:
      'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
  },
  {
    id: 5,
    title: 'Policy for Children',
    description:
      'We do not knowingly solicit information from or market to children under the age of 16. If we learn that we have collected personal information from a child under age 16 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 16, please contact us.',
  },
  {
    id: 6,
    title: 'Your Privacy Rights',
    description:
      'You may review, change, or terminate your account at any time. Based on the laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us.',
  },
  {
    id: 7,
    title: 'Changes to this privacy policy',
    description:
      'PromoonSoft has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications',
  },
  {
    id: 8,
    title: 'Acceptance of these terms',
    description:
      'By using this Site and sharing your contact details with PromoonSoft, you signify your acceptance of this policy. The Site is available only to individuals who are at least 16 years’ old. By using this Site you agree that you’re at least 16 years old. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.',
  },
  {
    id: 9,
    title: 'Contact Us',
    description:
      'If you have questions or comments about this Privacy Policy, please contact us at: info@promoonsoft.com',
  },
];

const TermsandConditions = () => {
  return (
    <div className="min-h-screen w-full  bg-white md:px-0 px-4">
      <div className="pt-[200px] pb-[100px] bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white text-center">
              Terms and Conditions
            </h1>
          </div>
          <div className="flex justify-center mt-8">
            <p className="text-white">Recent date of update: 07/15/2024</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 pb-16 pt-4 ">
        <div className="mb-16">
          <h2 className="text-black text-4xl">Introduction</h2>
          <p className="text-black text-base pt-4">
            Welcome to ProMoon Software Solution. ProMoon Software Solution
            ("we," "our," or "us") is committed to protecting your privacy when
            you access the https://promoon-website.vercel.app/. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our Website. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the Website.
          </p>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="mb-16"
          >
            <h2 className="text-black text-4xl">{item.title}</h2>
            <p className="text-black text-base pt-4">{item.description}</p>
            {item.details?.map((detail, index) => (
              <div
                key={index}
                className="mb-4"
              >
                <ul className="pl-8 pt-4 list-disc list-outside">
                  <li className="text-xl font-semibold text-black">
                    {detail.subTitle}
                  </li>
                  {detail.detail && (
                    <p className="text-black pl-4 pt-2">{detail.detail}</p>
                  )}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsandConditions;
