const pottery = {
    id: 1
}

export const makePottery = (shape, weight, height) => {
    const potteryObject = {
        id: pottery.id++,
        shape: shape,
        weight: weight,
        height: height
    }
    return potteryObject
}