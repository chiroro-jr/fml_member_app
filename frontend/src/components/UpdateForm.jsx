import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { useFormik } from 'formik'
import { MemberService } from '../utils/members.serverice'
import { titles, genders, maritalStatuses } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

function UpdateForm({ title, member }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const memberService = new MemberService()
    const formik = useFormik({
        initialValues: {
            ...member,
            title: { title: member.title },
            gender: { gender: member.gender },
            marital_status: {
                marital_status: member.marital_status,
            },
            date_of_birth: new Date(member.date_of_birth),
        },
        onSubmit: (values) => {
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

    const handleDelete = (event) => {
        event.preventDefault()
        const { id } = member
        setIsSubmitting(true)
        memberService.deleteMember(id).then((deletedMember) => {
            console.log(deletedMember)
            setIsSubmitting(false)

            if (!deletedMember) {
                // An error occured in the deletion process
                alert('An error occured')
            } else {
                // You could also show a toast then navigate to the homepage
                navigate('/')
            }
        })
    }

    const handleUpdate = (event) => {
        const { id } = member
        event.preventDefault()
        const values = formik.values
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
        memberService.updateMember(id, data).then((updatedMember) => {
            console.log(updatedMember)
            setIsSubmitting(false)
        })
    }

    return (
        <form>
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                            className="w-full mb-3"
                        />
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                                    optionLabel="status"
                                    placeholder="Select a status"
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
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
                                    className="w-full mb-3"
                                />
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-5 mb-2">
                            <Button
                                disabled={isSubmitting}
                                onClick={handleUpdate}
                                type="submit"
                                label={
                                    isSubmitting
                                        ? 'Saving member...'
                                        : 'Save member'
                                }
                                icon="pi pi-check"
                                className="w-full p-button-success"
                            />
                            <Button
                                onClick={handleDelete}
                                disabled={isSubmitting}
                                type="submit"
                                label="Delete member"
                                icon="pi pi-times"
                                className="w-full p-button-danger"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UpdateForm
