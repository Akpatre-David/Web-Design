import * as Yup from "yup";

export const contactUsValidation = Yup.object({
  firstName: Yup.string().required("First Name is Required "),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),
  phoneNumber: Yup.number().required("+234 Number is required"),
  message: Yup.string().required("Message is Required"),
});
