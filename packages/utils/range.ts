export const range = (max: number, min = 0) => {
    const arr = []

    for (let i = min; i < max; arr.push(i++)) {}

    return arr
}
