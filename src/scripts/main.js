// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 4)
//console.log(mug)
let plate = makePottery("plate", 32, 1)
let vase = makePottery("vase", 16, 10)
let bowl = makePottery("bowl", 22, 6)
let teapot = makePottery("teapot", 32, 12)
//console.log(teapot)


// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 2200)
//console.log(mugFired)
let plateFired = firePottery(plate, 2200)
let vaseFired = firePottery(vase, 2200)
let bowlFired = firePottery(bowl, 2200)
let teapotFired = firePottery(teapot, 2200)
//console.log(teapotFired)


// Determine which ones should be sold, and their price
let toSellMug = toSellOrNotToSell(mug)
console.log(toSellMug)
let toSellPlate = toSellOrNotToSell(plate)
let toSellVase = toSellOrNotToSell(vase)
let toSellBowl = toSellOrNotToSell(bowl)
let toSellTeapot = toSellOrNotToSell(teapot)
console.log(toSellTeapot)


// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = PotteryList()


