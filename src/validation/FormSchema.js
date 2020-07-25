import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Please include your first and last name")
        .required("Name is required"),
    size: yup
        .string()
        .oneOf(['personal', 'medium', 'large', 'mondo'], "Size is required"),
    sauces: yup
        .string()
        .oneOf(['marinara', 'pesto', 'clam', 'white garlic'], "Sauce is required"),
    instructions: yup
        .string()
        .min(3, "Please write N/A if there are no special instructions needed")
        .required("Not Required but write n/a")
})

export default formSchema
