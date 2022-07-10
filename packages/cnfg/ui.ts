import { color, range } from 'utils'

export const ui = {
  colors: {
    bg: range(16).map((level) => color(level)),
    text: range(16)
      .reverse()
      .map((level) => color(level)),
  },
}
