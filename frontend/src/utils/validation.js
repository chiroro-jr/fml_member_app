import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    title: Yup.object()
        .shape({ title: Yup.string().required('Select a title') })
        .required(),
    msisdn: Yup.string().required('Phone number is required'),
    national_id: Yup.string().required('National ID is required'),
    address_line1: Yup.string().required('Address is required'),
    gender: Yup.object()
        .shape({ gender: Yup.string().required('Select a gender') })
        .required('Select a gender'),
    product_name: Yup.string().required('Product name is required'),
    marital_status: Yup.object()
        .shape({
            marital_status: Yup.string().required('Select a marital status'),
        })
        .required('Select a marital status'),
    date_of_birth: Yup.string().required('Pick a date of birth'),
    member_number: Yup.string().required('Member number is required'),
})
