export const color = (level: number) => {
    const color = level.toString(16)

    return '#' + color.repeat(3)
}
