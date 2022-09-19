import { ChangeEvent } from 'react'

export type SetProp = (prop: string, val: unknown) => void

export type Control = (prop: string) => {
  value: string
  onInput: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

export type UseDataReturn<T extends AnyObj> = [T, SetProp, Control]
