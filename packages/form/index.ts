import { ChangeEvent, useState } from 'react'

type Obj<T extends string> = {
    [K in T]: string
}

type SetProp<T> = (prop: T, text: string) => void
type GetOnInput<T> = (
    prop: T
) => ({ target }: ChangeEvent<HTMLInputElement>) => void

export const useData = <T extends string>(
    ...props: T[]
): [Obj<T>, GetOnInput<T>] => {
    const [value, setValue] = useState<Obj<T>>(
        props.reduce((o, key) => ({ ...o, [key]: '' }), {}) as Obj<T>
    )

    const setProp: SetProp<T> = (prop, text) =>
        setValue((p) => ({ ...p, [prop]: text }))

    const getOnInput: GetOnInput<T> =
        (prop) =>
        ({ target }) =>
            setProp(prop, target.value)

    return [value, getOnInput]
}
