
let codepathAddress = "CodePath.org \n665 3rd St \nSan Francisco \nCA 94107"
let user = "Guillermo Sanchez\n156 Estabrook St. Apt 304\nSan Leandro \n94577"


let createInvoice = function(inv) {
    let date = new Date(inv.cycleEnd)
    date.setDate(date.getDate() + 1)
    let dueDate = new Date(date)
    dueDate.setDate(dueDate.getDate() + 4)
    
    date = date.toString().slice(0, 16)
    dueDate = dueDate.toString().slice(0, 16)
     return {
        // logo: "Guillermo Sanchez",
        header: 'GISL',
        from: user,
        date: date,
        due_date: dueDate,
        to: codepathAddress,
        currency: "usd",
        number: inv.cycle,
        items: [
            {
                name: `Guru Tasks (${inv.cycleInit} to ${inv.cycleEnd})` ,
                quantity: inv.hours,
                unit_cost: 30,
                description: "Description of tasks"
            }
        ]
    };
}

module.exports = createInvoice

    