const express = require('express')
const xlsx = require('json-as-xlsx')
const { PrismaClient } = require('@prisma/client')
var cors = require('cors')
const { toJson, select } = require('./utils')

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors({ origin: '*' }))

// This will return all the members in the database
// Later will implement filtering and sorting
app.get('/members', async (req, res) => {
    const skip = req.query.skip ? JSON.parse(req.query.skip) : undefined
    const take = req.query.take ? JSON.parse(req.query.take) : undefined

    try {
        let members = await prisma.member_application.findMany({
            select,
            skip,
            take,
        })
        members = JSON.parse(toJson(members))
        res.json({ data: { members } })
    } catch (error) {
        res.status(500).json({
            error: {
                message: 'Internal server error occured',
            },
        })
    }
})

// This will return 1 specific member given you submitted their ID
app.get('/members/:memberId', async (req, res) => {
    const id = JSON.parse(req.params.memberId)
    let member = await prisma.member_application.findUnique({
        where: { id },
        select,
    })
    member = JSON.parse(toJson(member))

    if (!member) {
        // member not found
        return res.status(404).json({
            error: {
                message: `member with id = ${id} not found.`,
            },
        })
    }

    res.json({ data: { member } })
})

// This will create a new member
app.post('/members', async (req, res) => {
    const memberJSON = req.body

    try {
        let member = await prisma.member_application.create({
            data: { ...memberJSON },
            select,
        })

        member = JSON.parse(toJson(member))
        res.json({ data: { member } })
    } catch (error) {
        res.status(500).json({
            error: {
                message: 'Internal server error occured',
            },
        })
    }
})

// This will delete a member given their Id
app.delete('/members/:memberId', async (req, res) => {
    const id = JSON.parse(req.params.memberId)

    try {
        let deletedMember = await prisma.member_application.delete({
            where: { id },
            select,
        })
        deletedMember = JSON.parse(toJson(deletedMember))
        res.json({ data: { member: deletedMember } })
    } catch (error) {
        if (error.code === 'P2025') {
            // Then member has not been found
            res.status(404).json({
                error: {
                    message: `Member with id=${id} not found`,
                },
            })
        } else {
            res.status(500).json({
                error: {
                    message: 'An internal server error occured...',
                },
            })
        }
    }
})

// This will update a member's details given the ID
// Handle this using PUT to completely replace a record since there are many fields
app.put('/members/:memberId', async (req, res) => {
    const id = JSON.parse(req.params.memberId)

    try {
        let updatedMember = await prisma.member_application.update({
            where: { id },
            data: { ...memberData },
            select,
        })
        updatedMember = JSON.parse(toJson(updatedMember))
        res.json({ data: { member: updatedMember } })
    } catch (error) {
        if (error.code === 'P2025') {
            // member not found
            res.status(404).json({
                error: {
                    message: `member with id=${id} not found`,
                },
            })
        } else {
            res.status(500).json({
                error: {
                    message: 'An internal server error occured...',
                },
            })
        }
    }
})

// Download excel file
app.get('/download', async (req, res) => {
    const members = await prisma.member_application.findMany()
    const data = [
        {
            sheet: 'Members',
            columns: [
                {
                    label: 'Member Number',
                    value: (row) => row.member_number || '',
                },
                {
                    label: 'Title',
                    value: (row) => row.title || '',
                },
                {
                    label: 'First Name',
                    value: (row) => row.first_name || '',
                },
                {
                    label: 'Last Name',
                    value: (row) => row.last_name || '',
                },
                {
                    label: 'Phone Number',
                    value: (row) => row.msisdn || '',
                },
                {
                    label: 'National ID',
                    value: (row) => row.national_id || '',
                },
                {
                    label: 'Address',
                    value: (row) => row.address_line1 || '',
                },
                {
                    label: 'Gender',
                    value: (row) => row.gender || '',
                },
                {
                    label: 'Product Name',
                    value: (row) => row.product_name || '',
                },
                {
                    label: 'Marital Status',
                    value: (row) => row.marital_status || '',
                },
                {
                    label: 'Date Of Birth',
                    value: (row) => row.date_of_birth || '',
                },
            ],
            content: members,
        },
    ]

    const filename = 'Members'
    const date = new Date().toDateString().split(' ').join('-')
    const fullFileName = `${filename}_${date}`

    const settings = {
        extraLength: 5,
        writeOptions: {
            type: 'buffer',
            bookType: 'xlsx',
        },
    }

    const buffer = xlsx(data, settings)
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-disposition': `attachment; filename=${fullFileName}.xlsx`,
    })
    res.end(buffer)
})

// If the client sends a request to an endpoint thats not defined i.e 404 NOT FOUND
app.use((req, res) => {
    res.status(404).json({
        data: null,
        error: {
            message: 'Path not defined',
        },
    })
})

app.listen(5000, () => console.log('Server listening on http://localhost:5000'))
