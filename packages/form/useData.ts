import { useState } from 'react'
import { Control, SetProp, UseDataReturn } from './types'
import { set } from 'object-path-immutable'

export const useData = <T extends AnyObj>(
  defaultProps: T
): UseDataReturn<T> => {
  const [value, setValue] = useState<T>(defaultProps)

  const setProp: SetProp = (prop, val) => setValue((p) => set(p, prop, val))

  // shortcut for inputs
  const control: Control = (prop) => ({
    value: (value[prop] as string) || '',
    onInput: ({ target }) => setProp(prop, target.value as T[keyof T]),
  })

  return [value, setProp, control]
}
