export const seconds = 3

export function delay(millis) {
    let cancelTimer = () => {}
    const promise = new Promise((resolve) => {
        const timeoutID = setTimeout(() => {
            resolve('done')
        }, millis)
        cancelTimer = () => {
            clearTimeout(timeoutID)
        }
    })
    return ({promise, cancelTimer})
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
