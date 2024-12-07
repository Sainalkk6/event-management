import * as yup from "yup"

export const signupSchema = yup.object().shape({
    name: yup.string().required("Required").min(4, "Username should be atleast 4 characters"),
    email: yup.string().email("Provide a valid email").required("Required"),
    password: yup.string().required("Required").min(8, "Password must be atleast 8 characters"),
})