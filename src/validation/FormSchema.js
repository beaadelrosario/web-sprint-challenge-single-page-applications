import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(1, "Who is ordering?")
        .required("Name is required"),
    sauces: yup
        .string()
        .oneOf(['marinara', 'pesto', 'clam', 'white garlic'], "Sauce is required"),
    toppings: yup
        .string()
        .oneOf(['vegetables', 'pepperoni', 'clams', 'ricotta'], "Toppings are required"),
    instructions: yup
        .string()
        .min(3, "Special Instructions")
        .required("Please write N/A if there are no special instructions needed")
})

export default formSchema
