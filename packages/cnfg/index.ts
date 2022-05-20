export const containerMaxWidth = "xs"

const color = (level: number) => {
  const color = level.toString(16)

  return "#" + color.repeat(3)
}

const range = (max: number, min = 0) => {
  const arr = []

  for (let i = min; i < max; arr.push(i++)) {}

  return arr
}

export const ui = {
  colors: {
    bg: range(16).map((level) => color(level)),
    text: range(16)
      .reverse()
      .map((level) => color(level)),
  },
}
