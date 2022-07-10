import { ChangeEvent, useState } from 'react'

type Obj<T extends string> = {
  [K in T]: string
}

type SetProp<T> = (prop: T, text: string) => void
type GetOnInput<T> = (
  prop: T
) => ({ target }: ChangeEvent<HTMLInputElement>) => void
type Control<T> = (prop: T) => {
  value: string
  onInput: ReturnType<GetOnInput<T>>
}

export const useData = <T extends string>(
  ...props: T[]
): [Obj<T>, Control<T>] => {
  const [value, setValue] = useState<Obj<T>>(
    props.reduce((o, key) => ({ ...o, [key]: '' }), {}) as Obj<T>
  )

  const setProp: SetProp<T> = (prop, text) =>
    setValue((p) => ({ ...p, [prop]: text }))

  const getOnInput: GetOnInput<T> =
    (prop) =>
    ({ target }) =>
      setProp(prop, target.value)

  const control: Control<T> = (prop) => ({
    value: value[prop],
    onInput: getOnInput(prop),
  })

  return [value, control]
}
