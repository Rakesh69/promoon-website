import { ContactUsType } from '@/types/ContactUsType';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import Spinner from '../Spinner';
import * as Yup from 'yup';
import CloseIcon from '@/icons/CloseIcon';
import CvIcon from '@/icons/CvIcon';

interface HiringModalProps {
  isHiringModalOpen: boolean;
  closeModal: () => void;
}

type HiringFormType = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  phone: string;
  resume: File | null;
};

const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  message: Yup.string().required('Required'),
  phone: Yup.string().matches(
    /^\d{10}$/,
    'Phone number must be exactly 10 digits'
  ),
  resume: Yup.mixed().required('A file is required'),
});

const HiringModal: React.FC<HiringModalProps> = ({
  isHiringModalOpen,
  closeModal,
}) => {
  const [isSending, setIsSending] = useState<boolean | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const initialValues: HiringFormType = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    phone: '',
    resume: null,
  };

  const contactUsFormApi = async (formData: HiringFormType) => {
    console.log('apiFormData', formData?.resume);
    setIsSending(true);
    const formDataObj = new FormData();
    formDataObj.append('firstname', formData.firstname);
    formDataObj.append('lastname', formData.lastname);
    formDataObj.append('email', formData.email);
    formDataObj.append('message', formData.message);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('resume', formData.resume as File);
    try {
      const response = await fetch('/api/hiring', {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > FILE_SIZE_LIMIT) {
        setFileError('File size too large. Maximum allowed size is 5MB.');
        setFieldValue('resume', null);
      } else {
        setFileError(null);
        setFieldValue('resume', file);
      }
    }
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (formData) => {
      console.log('formData>>', formData);

      await contactUsFormApi(formData);
      resetForm();
    },
  });
  useEffect(() => {
    if (isHiringModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isHiringModalOpen]);

  return (
    <>
      {isHiringModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="max-w-full w-90% md:w-[60%] 2xl:w-[30%] pb-7 m-auto bg-white border rounded-md p-5 shadow-2xl shadow-black">
            <div className="flex justify-between pb-4 border-b border-gray-500">
              <p className="text-xl font-semibold text-black">Apply Now</p>
              <button
                onClick={closeModal}
                className="text-black"
              >
                <CloseIcon />
              </button>
            </div>

            <form
              action="/upload"
              method="post"
              encType="multipart/form-data"
              className="pt-3"
              onSubmit={handleSubmit}
            >
              <div className="w-full ">
                <div className=" ">
                  <label
                    htmlFor="firstname"
                    className="font-medium text-textPrimary  text-base leading-1px"
                  >
                    First Name<span className="text-red-500 px-1">*</span>
                  </label>
                  <input
                    id="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    placeholder="First Name"
                    type="text"
                    className=" mt-2 border text-sm outline-none w-full rounded  border-inputBorder dark:border-darkBorder  py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-red-500">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="lastname"
                    className="font-medium text-textPrimary  dark:border-darkBorder text-base leading-1px"
                  >
                    Last Name<span className="text-red-500 px-1">*</span>
                  </label>
                  <input
                    placeholder="Last Name"
                    id="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastname}
                    type="text"
                    className=" mt-2 border  text-sm w-full rounded dark:border-darkBorder  border-inputBorder  py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
                  className="font-medium text-textPrimary  dark:border-darkBorder text-base leading-1px"
                >
                  Email Address<span className="text-red-500 px-1">*</span>
                </label>
                <input
                  placeholder="Email Address"
                  id="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  className=" mt-2 border outline-none w-full text-sm  rounded  dark:border-darkBorder border-inputBorder py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
                  className="font-medium text-textPrimary  text-base leading-1px"
                >
                  Additional information
                  <span className="text-red-500 px-1">*</span>
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Add a cover letter or anything else you want to share"
                  typeof="text"
                  className="mt-2 border resize-none text-sm h-[106px] outline-none w-full  rounded dark:border-darkBorder border-inputBorder  py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col sm:flex-row justify-between gap-2 items-center">
                <div className="flex justify-start items-start">
                  <span className="font-semibold text-base  text-black">
                    Attach your resume
                  </span>
                </div>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-2">
                  {values?.resume?.name && (
                    <p className="text-white">{values?.resume?.name}</p>
                  )}
                  {fileError && (
                    <p className="text-red-500 text-sm">{fileError}</p>
                  )}

                  <label className="flex justify-between cursor-pointer gap-4 p-2 border border-primary border-dashed">
                    <CvIcon />
                    <div>
                      <span className="text-lightBlack ">Attach Resume/CV</span>
                    </div>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="flex justify-center items-center w-fit gap-3 bg-send-bg-btn py-3 px-6 text-white font-bold rounded-md "
                >
                  SEND MESSAGE {isSending && <Spinner />}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HiringModal;
