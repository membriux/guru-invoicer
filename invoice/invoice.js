let user = "Guillermo Sanchez\n156 Estabrook St. Apt 304\nSan Leandro \n94577"
let user_items = [
    {
        name: "Guru Tasks",
        quantity: 1,
        unit_cost: 30,
        description: "Description of tasks"
    }
]

function createInvoice(user, items, invId) {
    var invoice = {
        // logo: "Guillermo Sanchez",
        header: 'GISL',
        from: user,
        to: "CodePath.org",
        currency: "usd",
        number: invId,
        items,
        notes: "Thanks for being an awesome customer!"
    };
    return invoice
}

let invoice = createInvoice(user, user_items, "1")

module.exports = invoice

    