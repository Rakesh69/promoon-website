import { useFormik } from "formik";
import * as Yup from "yup";
import CvIcon from "@/icons/CvIcon";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { sendHiringForm } from "./../lib/hiringapi";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  isChecked: Yup.boolean()
    .isTrue("Please Read And Tick Term & Condition Checkbox")
    .required(),
  portfolioUrl: Yup.string().url("Invalid URL format").required("Required"),
  message: Yup.string().required("Required"),
  resume: Yup.mixed().required("Resume is required"),
});

type HiringFormType = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  portfolioUrl: string;
  isChecked: boolean;
  resume: any;
};

const ContactUsForm = () => {
  const [resumeData, setResumeData] = useState<File | null>(null);
  const initialValues: HiringFormType = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    portfolioUrl: "",
    isChecked: false,
    resume: null,
  };
  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const file = files[0];
      setResumeData(file);
      setFieldValue("resume", file);
    }
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("portfolioUrl", values.portfolioUrl);
      formData.append("isChecked", values.isChecked ? "true" : "false");
      formData.append("resume", values.resume);

      await sendHiringForm(formData);
    },
  });

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setResumeData(file);
  //   setFieldValue('resume', file);
  // };

  console.log("Value", values);

  return (
    <section className="dark:bg-darkbg pt-8">
      <div className="max-w-full w-90% md:w-[50%] lg:w-[40%] m-auto">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-center text-textPrimary dark:text-white text-xl md:text-xl md:font-semibold lg:text-xl xl:text-3xl lg:font-semibold font-semibold pt-20 pb-4">
              Join our company and start your career
              <br className="hidden md:hidden lg:block" /> with us
            </p>
          </div>
          <div>
            <form className="py-5" onSubmit={handleSubmit}>
              <div className="w-full lg:flex lg:justify-between gap-5">
                <div className="pb-3 lg:w-1/2">
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
                    className="border text-sm outline-none w-full rounded dark:text-white border-inputBorder dark:border-darkBorder dark:bg-inputColor py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-xs text-red-500">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="pb-3 lg:w-1/2">
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
                    className="border outline-none text-sm w-full rounded dark:border-darkBorder dark:text-white border-inputBorder dark:bg-inputColor py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {errors.lastname && touched.lastname && (
                    <span className="text-xs text-requiredField">
                      {errors.lastname}
                    </span>
                  )}
                </div>
              </div>

              <div className="pb-3">
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
                  className="border outline-none w-full text-sm dark:text-white rounded dark:bg-inputColor dark:border-darkBorder border-inputBorder py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-requiredField">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="pb-3">
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
                  className="border outline-none w-full text-sm rounded dark:bg-inputColor dark:text-white dark:border-darkBorder border-inputBorder py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.portfolioUrl && touched.portfolioUrl && (
                  <span className="text-xs text-requiredField">
                    {errors.portfolioUrl}
                  </span>
                )}
              </div>

              <div className="pb-3">
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
                  className="border resize-none text-sm h-[106px] outline-none w-full dark:text-white rounded dark:border-darkBorder border-inputBorder dark:bg-inputColor py-2 px-3 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {errors.message && touched.message && (
                  <span className="text-xs text-requiredField">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex justify-start items-start mb-4 md:mb-0">
                    <span className="font-semibold text-base dark:text-white text-black">
                      Attach your resume
                    </span>
                  </div>

                  <label className="flex flex-row justify-start gap-4 border p-2 border-primary border-dashed max-w-96 cursor-pointer">
                    <CvIcon />
                    <div>
                      <span className="text-lightBlack dark:text-white">
                        Attach Resume/CV
                      </span>
                    </div>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx,"
                      className="hidden"
                      onChange={(e) => handleFileChange(e?.target?.files)}
                    />
                  </label>
                </div>
              </div>

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

              <div className="w-full mt-5">
                <button
                  type="submit"
                  className="bg-send-bg-btn w-full py-3 px-23px text-white font-bold rounded-full"
                >
                  Submit
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
