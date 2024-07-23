import { useFormik } from 'formik';
import * as Yup from 'yup';
import CvIcon from '@/icons/CvIcon';
import CheckBox from './CheckBox';
import { useState } from 'react';
import Spinner from './Spinner';
import axios from 'axios';

const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  isChecked: Yup.boolean()
    .isTrue('Please Read And Tick Term & Condition Checkbox')
    .required(),
  portfolioUrl: Yup.string().url('Invalid URL format').required('Required'),
  message: Yup.string().required('Required'),
  resume: Yup.mixed().required('A file is required'),
});

type HiringFormType = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  portfolioUrl: string;
  isChecked: boolean;
  resume: File | null;
};

const ContactUsForm = () => {
  const [isSending, setIsSending] = useState<boolean | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const initialValues: HiringFormType = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    portfolioUrl: '',
    isChecked: false,
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
    formDataObj.append('portfolioUrl', formData.portfolioUrl);
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

  return (
    <section className="bg-bg-colors-background pt-8">
      <div className="max-w-full w-90% md:w-[50%] lg:w-[40%] m-auto">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-center text-textPrimary dark:text-white text-xl md:text-xl md:font-semibold lg:text-xl xl:text-3xl lg:font-semibold font-semibold md:pt-40 pt-20 pb-4">
              Join our company and start your career
              <br className="hidden md:hidden lg:block" /> with us
            </p>
          </div>
          <div>
            <form
              action="/upload"
              method="post"
              encType="multipart/form-data"
              className="pt-5  pb-7 md:pb-[115px]"
              onSubmit={handleSubmit}
            >
              <div className="w-full lg:flex lg:justify-between gap-5">
                <div className="pb-9  lg:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="font-medium text-textPrimary dark:text-white text-base leading-1px"
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
                    className=" mt-2 border text-sm outline-none w-full rounded dark:text-white border-inputBorder dark:border-darkBorder dark:bg-borderBlack py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-red-500">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="pb-9 lg:w-1/2">
                  <label
                    htmlFor="lastname"
                    className="font-medium text-textPrimary dark:text-white dark:border-darkBorder text-base leading-1px"
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
                    className=" mt-2 border outline-none text-sm w-full rounded dark:border-darkBorder dark:text-white border-inputBorder dark:bg-borderBlack py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.lastname && touched.lastname && (
                    <span className="text-xs text-requiredField">
                      {errors.lastname}
                    </span>
                  )}
                </div>
              </div>

              <div className="pb-9">
                <label
                  htmlFor="email"
                  className="font-medium text-textPrimary dark:text-white dark:border-darkBorder text-base leading-1px"
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
                  className=" mt-2 border outline-none w-full text-sm dark:text-white rounded dark:bg-borderBlack dark:border-darkBorder border-inputBorder py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-requiredField">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="pb-9">
                <label
                  htmlFor="portfolioUrl"
                  className="font-medium text-textPrimary dark:text-white dark:border-darkBorder text-base leading-1px"
                >
                  Portfolio URL<span className="text-red-500 px-1">*</span>
                </label>
                <input
                  name="portfolioUrl"
                  id="portfolioUrl"
                  type="url"
                  placeholder="Portfolio URL"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.portfolioUrl}
                  className=" mt-2 border outline-none w-full text-sm rounded dark:bg-borderBlack dark:text-white dark:border-darkBorder border-inputBorder py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.portfolioUrl && touched.portfolioUrl && (
                  <span className="text-xs text-requiredField">
                    {errors.portfolioUrl}
                  </span>
                )}
              </div>

              <div className="pb-9">
                <label
                  htmlFor="message"
                  className="font-medium text-textPrimary dark:text-white text-base leading-1px"
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
                  className="mt-2 border resize-none text-sm h-[106px] outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-borderBlack py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col sm:flex-row justify-between gap-2 items-center">
                <div className="flex justify-start items-start">
                  <span className="font-semibold text-base dark:text-white text-black">
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
                      <span className="text-lightBlack dark:text-white">
                        Attach Resume/CV
                      </span>
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

              <div className="flex cursor-pointer pt-9">
                <CheckBox
                  id="isChecked"
                  isChecked={values.isChecked}
                  onChange={() => {
                    setFieldValue('isChecked', !values.isChecked);
                  }}
                />
                <label
                  htmlFor="isChecked"
                  className="text-base pl-2 font-normal text-darkBlack dark:text-textWhite"
                >
                  I agree to the
                </label>
                <a className="text-base text-darkBlack dark:text-white font-medium pl-1 underline underline-offset-4">
                  Terms and Conditions
                </a>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="submit"
                  className="flex justify-center items-center w-fit gap-3 bg-send-bg-btn py-3 px-6 text-white font-bold rounded-full"
                >
                  SEND MESSAGE {isSending && <Spinner />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
