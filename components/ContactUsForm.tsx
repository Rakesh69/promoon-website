import { useFormik } from 'formik';
import * as Yup from 'yup';
import Spinner from './Spinner';
import { useState } from 'react';
import { ContactUsType } from '@/types/ContactUsType';

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

const ContactUsForm = () => {
  const [isSending, setIsSending] = useState<boolean | null>(false);

  const contactUsFormApi = (formData: ContactUsType) => {
    setIsSending(true);
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).finally(() => {
      setIsSending(false);
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

  return (
    <section className="bg-bg-colors-background">
      <div className="max-w-full w-90% md:w-[50%] lg:w-[40%] pb-14 m-auto">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-center text-textPrimary dark:text-white text-xl md:font-semibold md:text-3xl lg:font-semibold font-semibold pt-40 pb-12">
              Ready To Unlock Your Growth Potential?
              <br className="hidden md:hidden lg:block" /> Get In Touch
            </p>
          </div>

          <div>
            <form
              className=""
              onSubmit={handleSubmit}
            >
              <div className="w-full lg:flex lg:justify-between gap-5">
                <div className="pb-9 lg:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="font-medium text-textPrimary dark:text-white text-base leading-1px"
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
                    className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none dark:text-white w-full rounded border-inputBorder dark:border-darkBorder dark:bg-borderBlack py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-requiredField">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="pb-9 lg:w-1/2">
                  <label
                    htmlFor="lastname"
                    className="font-medium text-textPrimary dark:text-white dark:border-darkBorder text-base leading-1px"
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
                    className="mt-2 border outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-borderBlack text-sm py-2 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Email Address"
                  id="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none dark:text-white w-full rounded border-inputBorder dark:border-darkBorder dark:bg-borderBlack py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-requiredField">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="pb-9">
                <label
                  htmlFor="phone"
                  className="font-medium text-textPrimary dark:text-white dark:border-darkBorder text-base leading-1px"
                >
                  Phone No <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Phone Number"
                  id="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  type="tel"
                  className="mt-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none dark:text-white w-full rounded border-inputBorder dark:border-darkBorder dark:bg-borderBlack py-2 text-sm px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                {errors.phone && touched.phone && (
                  <span className="text-xs text-requiredField">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="pb-9">
                <label
                  htmlFor="message"
                  className="font-medium text-textPrimary dark:text-white text-base leading-1px"
                >
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Add a cover letter or anything else you want to share"
                  className="mt-2 border resize-none h-[106px] outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-borderBlack py-2 px-3 text-sm focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
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
