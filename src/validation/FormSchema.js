import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Who is ordering?")
        .required("Name is required"),
    size: yup
        .string()
        .oneOf(['personal', 'medium', 'large', 'mondo'], "Size is required"),
    sauces: yup
        .string()
        .oneOf(['marinara', 'pesto', 'clam', 'white garlic'], "Sauce is required"),
    instructions: yup
        .string()
        .min(3, "Special Instructions")
        .required("Please write N/A if there are no special instructions needed")
})

export default formSchema
