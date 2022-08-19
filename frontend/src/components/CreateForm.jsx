import { classNames } from 'primereact/utils'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { useFormik } from 'formik'
import { MemberService } from '../utils/members.serverice'
import {
    initialFormValues,
    titles,
    genders,
    maritalStatuses,
} from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { validationSchema } from '../utils/validation'

function CreateForm({ title }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const memberService = new MemberService()
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            const data = {
                ...values,
                title: values.title.title,
                gender: values.gender.gender,
                marital_status: values.marital_status.marital_status,
                date_of_birth: values.date_of_birth
                    ? values.date_of_birth.toLocaleDateString()
                    : '',
            }
            setIsSubmitting(true)
            memberService.createMember(data).then((newMember) => {
                setIsSubmitting(false)
                navigate('/')
            })
        },
    })

    const isFormFieldValid = (name) =>
        !!(formik.touched[name] && formik.errors[name])
    const getFormErrorMessage = (name) => {
        if (name === 'gender') {
            return (
                isFormFieldValid(name) && (
                    <small className="p-error">
                        {formik.errors[name][name]}
                    </small>
                )
            )
        }

        if (name === 'title') {
            return (
                isFormFieldValid(name) && (
                    <small className="p-error">
                        {formik.errors[name][name]}
                    </small>
                )
            )
        }

        if (name === 'marital_status') {
            return (
                isFormFieldValid(name) && (
                    <small className="p-error">
                        {formik.errors[name][name]}
                    </small>
                )
            )
        }
        return (
            isFormFieldValid(name) && (
                <small className="p-error">{formik.errors[name]}</small>
            )
        )
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex align-items-center justify-content-center">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">
                            {title}
                        </div>
                    </div>

                    <div>
                        <div className="flex align-items-center justify-content-between gap-5 mb-2">
                            <div style={{ flex: 1 }}>
                                <label
                                    htmlFor="title"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Title
                                </label>
                                <Dropdown
                                    value={formik.values.title}
                                    id="title"
                                    name="title"
                                    options={titles}
                                    onChange={formik.handleChange}
                                    optionLabel="title"
                                    placeholder="Select a Title"
                                    className={classNames({
                                        'p-invalid': isFormFieldValid('title'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid('title'),
                                    })}
                                />
                                {getFormErrorMessage('title')}
                            </div>
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="first_name"
                                    className="block text-900 font-medium mb-2"
                                >
                                    FirstName
                                </label>
                                <InputText
                                    id="first_name"
                                    name="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('first_name'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid('first_name'),
                                    })}
                                />
                                {getFormErrorMessage('first_name')}
                            </div>
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="last_name"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Last Name
                                </label>
                                <InputText
                                    id="last_name"
                                    name="last_name"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('last_name'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid('last_name'),
                                    })}
                                />
                                {getFormErrorMessage('last_name')}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-5 mb-2">
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="date_of_birth"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Date of Birth
                                </label>
                                <Calendar
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    value={formik.values.date_of_birth}
                                    onChange={formik.handleChange}
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('date_of_birth'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid(
                                            'date_of_birth'
                                        ),
                                    })}
                                />
                                {getFormErrorMessage('date_of_birth')}
                            </div>
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="gender"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Gender
                                </label>
                                <Dropdown
                                    value={formik.values.gender}
                                    id="gender"
                                    name="gender"
                                    onChange={formik.handleChange}
                                    options={genders}
                                    optionLabel="gender"
                                    placeholder="Select a Gender"
                                    className={classNames({
                                        'p-invalid': isFormFieldValid('gender'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid('gender'),
                                    })}
                                />
                                {getFormErrorMessage('gender')}
                            </div>
                        </div>
                        <label
                            htmlFor="address_line1"
                            className="block text-900 font-medium mb-2"
                        >
                            Address
                        </label>
                        <InputText
                            id="address_line1"
                            name="address_line1"
                            value={formik.values.address_line1}
                            onChange={formik.handleChange}
                            type="text"
                            className={classNames({
                                'p-invalid': isFormFieldValid('address_line1'),
                                'w-full': true,
                                'mb-3': !isFormFieldValid('address_line1'),
                            })}
                        />
                        {getFormErrorMessage('address_line1')}
                        <div className="flex align-items-center justify-content-between gap-5 mb-2">
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="msisdn"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Phone Number
                                </label>
                                <InputText
                                    id="msisdn"
                                    name="msisdn"
                                    value={formik.values.msisdn}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid': isFormFieldValid('msisdn'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid('msisdn'),
                                    })}
                                />
                                {getFormErrorMessage('msisdn')}
                            </div>
                            <div style={{ flex: 4 }}>
                                <label
                                    htmlFor="national_id"
                                    className="block text-900 font-medium mb-2"
                                >
                                    National ID
                                </label>
                                <InputText
                                    id="national_id"
                                    name="national_id"
                                    value={formik.values.national_id}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('national_id'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid(
                                            'national_id'
                                        ),
                                    })}
                                />
                                {getFormErrorMessage('national_id')}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-5 mb-2">
                            <div style={{ flex: 1 }}>
                                <label
                                    htmlFor="marital_status"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Marital Status
                                </label>
                                <Dropdown
                                    id="marital_status"
                                    name="marital_status"
                                    value={formik.values.marital_status}
                                    onChange={formik.handleChange}
                                    options={maritalStatuses}
                                    optionLabel="marital_status"
                                    placeholder="Select a status"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('marital_status'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid(
                                            'marital_status'
                                        ),
                                    })}
                                />
                                {getFormErrorMessage('marital_status')}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label
                                    htmlFor="member_number"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Member Number
                                </label>
                                <InputText
                                    id="member_number"
                                    name="member_number"
                                    value={formik.values.member_number}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('member_number'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid(
                                            'member_number'
                                        ),
                                    })}
                                />
                                {getFormErrorMessage('member_number')}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label
                                    htmlFor="product_name"
                                    className="block text-900 font-medium mb-2"
                                >
                                    Product Name
                                </label>
                                <InputText
                                    id="product_name"
                                    name="product_name"
                                    value={formik.values.product_name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    className={classNames({
                                        'p-invalid':
                                            isFormFieldValid('product_name'),
                                        'w-full': true,
                                        'mb-3': !isFormFieldValid(
                                            'product_name'
                                        ),
                                    })}
                                />
                                {getFormErrorMessage('product_name')}
                            </div>
                        </div>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            label={
                                isSubmitting ? 'Adding member...' : 'Add member'
                            }
                            icon="pi pi-user"
                            className="w-full p-button-danger"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateForm
