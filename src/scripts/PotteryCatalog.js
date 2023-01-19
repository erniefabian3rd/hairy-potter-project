let potteryArray = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
        potteryObject.price = 40
    } else if (potteryObject.weight < 6 && potteryObject.cracked === false) {
        potteryObject.price = 20
    }
    if (potteryObject.cracked === false) {
        potteryArray.push(potteryObject)
    }
    return potteryObject
}

export const usePottery = () => {
    return potteryArray
}