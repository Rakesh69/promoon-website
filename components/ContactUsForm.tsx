import CheckBox from "./CheckBox";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { sendContactForm } from "./../lib/api";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  isChecked: Yup.boolean().isTrue("Required").required(),
  message: Yup.string().required("Required"),
});

const ContactUsForm = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      isChecked: false,
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await sendContactForm(values);
    },
  });

  return (
    <section className="dark:bg-darkbg">
      <div className="max-w-full w-90% md:w-[50%] lg:w-[40%] m-auto">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-center text-textPrimary dark:text-white text-xl md:text-xl md:font-semibold lg:text-xl xl:text-3xl lg:font-semibold font-semibold pt-20 pb-4">
              Ready To Unlock Your Growth Potential?
              <br className="hidden md:hidden lg:block" /> Get In Touch
            </p>
          </div>

          <div>
            <form className="py-5" onSubmit={handleSubmit}>
              <div className="w-full lg:flex lg:justify-between gap-5">
                <div className="pb-3 lg:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="font-medium text-textPrimary dark:text-white text-base leading-1px "
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
                    className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none dark:text-white w-full rounded border-inputBorder dark:border-darkBorder dark:bg-inputColor py-2 text-sm px-3  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-requiredField">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="pb-3 lg:w-1/2">
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
                    className="border outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-inputColor text-sm py-2 px-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.lastname && touched.lastname && (
                    <span className="text-xs text-requiredField">
                      {errors.lastname}
                    </span>
                  )}
                </div>
              </div>

              <div className=" pb-3">
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
                  className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border outline-none dark:text-white w-full rounded border-inputBorder dark:border-darkBorder dark:bg-inputColor py-2 text-sm px-3  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-requiredField">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="pb-3">
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
                  placeholder="Add a cover letter or anything else you want to sahre"
                  typeof="Your message"
                  className="border resize-none h-[106px] outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-inputColor py-2 px-3 text-sm focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
              </div>
              <div>
                <div className="flex cursor-pointer">
                  <CheckBox
                    id="isChecked"
                    isChecked={values.isChecked}
                    onChange={() => {
                      setFieldValue("isChecked", !values.isChecked);
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

                {!values.isChecked && errors.isChecked && touched.isChecked && (
                  <p className="text-sm mt-1 text-requiredField">
                    {errors.isChecked}
                  </p>
                )}

                <div className="w-full mt-5">
                  <button
                    type="submit"
                    className="bg-send-bg-btn w-full py-3 px-23px text-white font-bold rounded-full"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
