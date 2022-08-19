function toObject() {
    return JSON.parse(
        JSON.stringify(
            this,
            (key, value) =>
                typeof value === 'bigint' ? value.toString() : value // return everything else unchanged
        )
    )
}

function toJson(data) {
    if (data !== undefined) {
        return JSON.stringify(data, (_, v) =>
            typeof v === 'bigint' ? `${v}#bigint` : v
        ).replace(/"(-?\d+)#bigint"/g, (_, a) => a)
    }
}

const select = {
    id: true,
    first_name: true,
    last_name: true,
    title: true,
    msisdn: true,
    national_id: true,
    address_line1: true,
    gender: true,
    product_name: true,
    marital_status: true,
    date_of_birth: true,
    member_number: true,
}

module.exports = { toObject, toJson, select }
