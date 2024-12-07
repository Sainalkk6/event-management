import * as yup from "yup"

export const signupSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().min(4, "Password must be at least 4 characters").required("Required"),
    confirmPass: yup.string().oneOf([yup.ref("password"),""], "Passwords must match"),
})