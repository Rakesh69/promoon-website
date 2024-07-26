import TrueIcon from '@/icons/TrueIcon';
import React, { useEffect, useState } from 'react';

interface SubDetail {
  Title: string;
}

type Detail = {
  subTitle: string;
  detail?: string;
  subdetails?: { Title: string }[];
};

type Item = {
  id: number;
  title: string;
  description?: string;
  details?: Detail[];
};

const data: Item[] = [
  {
    id: 1,
    title: 'Introduction',
    description:
      'Welcome to ProMoon Software Solution. These terms and conditions ("Terms") govern your use of our Website. By accessing or using the Website https://promoon-website.vercel.app/, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Website.',
  },
  {
    id: 2,
    title: 'Use of the Website',
    details: [
      {
        subTitle: 'Eligibility:',
        detail:
          'You must be at least 16 years old to use the Website. By using the Website, you represent and warrant that you meet this eligibility requirement.',
      },
      {
        subTitle: 'User Account:',
        detail:
          'To access certain features of the Website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions under your account.',
      },
      {
        subTitle: 'Prohibited Activities:',
        detail:
          'You agree not to engage in any of the following prohibited activities:',
        subdetails: [
          { Title: 'Using the Website for any illegal purpose.' },
          {
            Title:
              'Interfering with or disrupting the operation of the Website.',
          },
          { Title: 'Attempting to gain unauthorized access to the Website.' },
          { Title: 'Using the Website to transmit any harmful content.' },
          { Title: 'Violating any applicable laws or regulations.' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Intellectual Property',
    details: [
      {
        subTitle: 'Ownership:',
        detail:
          'The Website and its original content, features, and functionality are and will remain the exclusive property of ProMoon Software Solution and its licensors. The Website is protected by copyright, trademark, and other laws of the United States and foreign countries.',
      },
      {
        subTitle: 'License:',
        detail:
          'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Website for your personal and non-commercial use.',
      },
    ],
  },
  {
    id: 4,
    title: 'Content',

    details: [
      {
        subTitle: 'User Content:',
        detail:
          'You are responsible for any content that you post, upload, or otherwise make available on the Website ("User Content"). By making User Content available on the Website, you grant us a non-exclusive, transferable, sublicensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, and perform your User Content in connection with operating and providing the Website.',
      },
      {
        subTitle: 'Content Removal:',
        detail:
          'We reserve the right, but are not obligated, to monitor and review User Content and to remove any content that we believe violates these Terms or is otherwise objectionable.',
      },
    ],
  },
  {
    id: 5,
    title: 'Privacy',
    description:
      'Your use of the Website is also governed by our Privacy Policy, which can be found at [link to Privacy Policy]. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.',
  },

  {
    id: 5,
    title: 'Disclaimers',
    details: [
      {
        subTitle: 'No Warranties:',
        detail:
          'The Website is provided on an "as-is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the Website\'s content and assume no liability or responsibility for any errors, mistakes, or inaccuracies of content.',
      },
      {
        subTitle: 'Limitation of Liability:',
        detail:
          'To the fullest extent permitted by law, ProMoon Software Solution and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use of or inability to use the Website; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Website; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Website by any third party; or (v) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Website.',
      },
    ],
  },

  {
    id: 6,
    title: 'Indemnification',
    description:
      "You agree to indemnify and hold harmless ProMoon Software Solution and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from (i) your use of and access to the Website; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.",
  },
  {
    id: 7,
    title: 'Termination',
    description:
      'We may terminate or suspend your account and bar access to the Website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms.',
  },
  {
    id: 8,
    title: 'Governing Law',
    description:
      'All matters relating to the Website and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of Colorado without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the Website shall be instituted exclusively in the federal courts of India or the courts of the City and County of Denver, State of Colorado. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts. ',
  },
  {
    id: 9,
    title: 'Changes to this Privacy Policy',
    description:
      'PromoonSoft has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.',
  },
  {
    id: 10,
    title: 'Changes to Terms',
    description:
      'We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.',
  },
  {
    id: 11,
    title: 'Contact Us',
    description:
      'If you have any questions about these Terms, please contact us at: info@promoonsoft.com.',
  },
];

const TermsandConditions: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hoveredParagraph, setHoveredParagraph] = useState<number | null>(null);
  const [yScroll, setYScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleParagraphHover = (id: number | null) => {
    setHoveredParagraph(id);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="pt-36 pb-32 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="flex flex-col justify-between md:px-0 px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Terms and Conditions
          </h1>
          <p className="text-white text-center mt-8">
            Recent date of update: 07/15/2024
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-16">
        {data.map((item) => (
          <section
            key={item.id}
            className="mb-16"
          >
            <h2
              className={`${
                selectedItem === item.id
                  ? 'border-b-4 border-sky-500'
                  : 'border-b-transparent'
              } text-black text-4xl font-bold w-fit relative `}
            >
              {item.title}
              <div className="border-animation" />
            </h2>
            {item.description && (
              <p
                className={`text-black text-base font-normal pt-4 ${
                  hoveredParagraph === item.id
                    ? 'border-sky-500'
                    : 'border-transparent'
                } transition-all duration-300`}
              >
                {item.description}
              </p>
            )}
            {item.details?.map((detail, index) => (
              <div
                key={index}
                className="mb-4"
              >
                <ul className="pl-8 pt-4 list-disc">
                  <li className="text-xl font-semibold text-black">
                    {detail.subTitle}
                  </li>
                  {detail.detail && (
                    <p className="text-black pl-4 pt-2 font-normal">
                      {detail.detail}
                    </p>
                  )}
                  {detail.subdetails?.map((subdetail, subIndex) => (
                    <div
                      key={subIndex}
                      className="pl-6 text-black flex justify-start gap-4 mt-1"
                    >
                      <div>
                        <TrueIcon />
                      </div>
                      <div> {subdetail.Title}</div>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsandConditions;
