let initialDate = new Date('09/30/2019')
let cycleInput = $('#cycle')
let cycleInitText = $('.cycleInit')
let cycleEndText = $('.cycleEnd')
let current = $('#currentCycleText')

function getCurrentCycle() {
    let now = new Date()
    let timeDifference = now - initialDate 
    let dayDifference = parseInt(timeDifference / (1000 * 3600 * 24))
    return parseInt(dayDifference / 14) + 1
}

function getCycleRange(cycle) {
    let initCycle = new Date(initialDate)
    initCycle.setDate(initCycle.getDate() )
    

    let daysToAdd = (cycle - 1)  * 14
    initCycle.setDate(initCycle.getDate() + daysToAdd)

    let endCycle = new Date(initCycle)
    endCycle.setDate(endCycle.getDate() + 13)
    
    cycleInitText.text(initCycle.toString().slice(0,16))
    cycleInitText.val(`${initCycle.toString().slice(0,16)}`)

    cycleEndText.text(endCycle.toString().slice(0,16))
    cycleEndText.val(`${endCycle.toString().slice(0,15)}`)

}

function updateCycleText(cycle) {
    console.log('cycle changed')
    cycleInput.val(cycle)
    current.text(`${cycle}`)
    getCycleRange(cycle)
}

function onCycleChange() {
    let cycle = $('#cycle').val()
    updateCycleText(cycle)
}

function setup() {
    let currentCycle = getCurrentCycle()
    cycleInput.attr('max', currentCycle)
    updateCycleText(currentCycle)
}

setup()