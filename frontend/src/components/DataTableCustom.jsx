import { useState, useEffect } from 'react'
import { MemberService } from '../utils/members.serverice'
import { useNavigate } from 'react-router-dom'
import './DataTableCustom.css'

import { FilterMatchMode, FilterOperator } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

function DataTableCustom() {
    const navigate = useNavigate()
    const [members, setMembers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [globalFilterValue, setGlobalFilterValue] = useState('')
    const [selectedMembers, setSelectedMembers] = useState(null)
    const memberService = new MemberService()

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        first_name: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        last_name: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        msisdn: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        national_id: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        member_number: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        address_line1: {
            operator: FilterOperator.AND,
            constraints: [
                { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
        },
        date: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
    })

    useEffect(() => {
        memberService.getMembers().then((members) => {
            setMembers(members)
            setLoading(false)
        })
    }, [])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value
        let _filters = { ...filters }
        _filters['global'].value = value

        setFilters(_filters)
        setGlobalFilterValue(value)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <Button
                type="button"
                icon="pi pi-cog"
                onClick={() => navigate(`/members/${rowData.id}`)}
            ></Button>
        )
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Members</h5>
                <div className="flex gap-5 align-items-center">
                    <a
                        href="http://localhost:5000/download"
                        download
                        target="_blank"
                        className="download_btn"
                    >
                        Download Excel
                    </a>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Keyword Search"
                        />
                    </span>
                </div>
            </div>
        )
    }

    const header = renderHeader()

    return (
        <div style={{ padding: '1rem 2rem', marginTop: '6rem' }}>
            <Card>
                <DataTable
                    value={members}
                    paginator
                    className="p-datatable-customers"
                    header={header}
                    rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 15, 20, 25, 30]}
                    dataKey="id"
                    rowHover
                    selection={selectedMembers}
                    onSelectionChange={(e) => setSelectedMembers(e.value)}
                    filters={filters}
                    filterDisplay="menu"
                    loading={loading}
                    responsiveLayout="scroll"
                    globalFilterFields={['first_name', 'last_name', 'msisdn']}
                    emptyMessage="No members found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                >
                    <Column
                        field="title"
                        header="Title"
                        sortable
                        style={{ minWidth: '8rem' }}
                    />
                    <Column
                        field="first_name"
                        header="First Name"
                        sortable
                        filter
                        filterPlaceholder="Search by name"
                        style={{ minWidth: '12rem' }}
                    />
                    <Column
                        field="last_name"
                        header="Last Name"
                        sortable
                        style={{ minWidth: '12rem' }}
                        filter
                        filterPlaceholder="Search by country"
                    />
                    <Column
                        field="gender"
                        header="Gender"
                        sortable
                        style={{ minWidth: '8rem' }}
                    />
                    <Column
                        field="national_id"
                        header="National ID"
                        sortable
                        style={{ minWidth: '10rem' }}
                        filter
                        filterPlaceholder="Search by national id"
                    />
                    <Column
                        field="msisdn"
                        header="Phone Number"
                        sortable
                        filter
                        filterPlaceholder="Search by phone"
                        style={{ minWidth: '10rem' }}
                    />
                    <Column
                        field="address_line1"
                        header="Address"
                        sortable
                        filter
                        filterPlaceholder="Search by address"
                        style={{ minWidth: '14rem' }}
                    />
                    <Column
                        field="member_number"
                        header="Member Number"
                        sortable
                        filter
                        filterPlaceholder="Search by address"
                        style={{ minWidth: '14rem' }}
                    />
                    <Column
                        field="id"
                        headerStyle={{ width: '4rem', textAlign: 'center' }}
                        bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
                        body={actionBodyTemplate}
                    />
                </DataTable>
            </Card>
        </div>
    )
}

export default DataTableCustom
