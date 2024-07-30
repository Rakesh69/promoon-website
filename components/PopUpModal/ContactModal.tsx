import { ContactUsType } from '@/types/ContactUsType';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import Spinner from '../Spinner';
import * as Yup from 'yup';
import CloseIcon from '@/icons/CloseIcon';

interface ContactModalProps {
  isContactModalOpen: boolean;
  closeModal: () => void;
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  phone: Yup.string().matches(
    /^\d{10}$/,
    'Phone number must be exactly 10 digits'
  ),
  message: Yup.string().required('Required'),
});

const ContactModal: React.FC<ContactModalProps> = ({
  isContactModalOpen,
  closeModal,
}) => {
  const [isSending, setIsSending] = useState<boolean | null>(false);

  const contactUsFormApi = async (formData: ContactUsType) => {
    setIsSending(true);
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).finally(() => {
      setIsSending(false);
      closeModal();
    });
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log('values>>', values);
      await contactUsFormApi(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  return (
    <>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="max-w-full w-90% md:w-[50%] lg:w-[40%] pb-7 m-auto bg-white border rounded-md p-5 shadow-2xl shadow-black">
            <div className="flex justify-between pb-4 border-b border-gray-500">
              <p className="text-xl font-semibold">Contact Us</p>
              <button
                onClick={closeModal}
                className="text-black"
              >
                <CloseIcon />
              </button>
            </div>

            <form
              className=""
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-col">
                <div className="py-6 w-full">
                  <label
                    htmlFor="firstname"
                    className="font-medium text-textPrimary text-base leading-1px"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    placeholder="First Name"
                    type="text"
                    className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none w-full rounded border-gray-500 py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-requiredField">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className=" w-full">
                  <label
                    htmlFor="lastname"
                    className="font-medium text-textPrimary border-gray-500 text-base leading-1px"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Last Name"
                    id="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastname}
                    type="text"
                    className="mt-2 border outline-none w-full rounded border-gray-500 text-sm py-2 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.lastname && touched.lastname && (
                    <span className="text-xs text-requiredField">
                      {errors.lastname}
                    </span>
                  )}
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="font-medium text-textPrimary border-gray-500 text-base leading-1px"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Email Address"
                  id="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none w-full rounded border-gray-500 py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-requiredField">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="phone"
                  className="font-medium text-textPrimary border-gray-500 text-base leading-1px"
                >
                  Phone No
                </label>
                <input
                  placeholder="Phone Number"
                  id="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  type="tel"
                  className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none w-full rounded border-gray-500 py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                {errors.phone && touched.phone && (
                  <span className="text-xs text-requiredField">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="font-medium text-textPrimary text-base leading-1px"
                >
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Add a cover letter or anything else you want to share"
                  typeof="Your message"
                  className="mt-2 border resize-none h-[106px] outline-none w-full rounded border-gray-500 py-2 px-3 text-sm focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-center my-6">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-fit gap-3 bg-send-bg-btn py-3 px-6 font-bold rounded-full text-white"
                  >
                    SEND MESSAGE {isSending && <Spinner />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
