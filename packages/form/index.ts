import { ChangeEvent, useState } from 'react'

type Obj<T extends string> = {
    [K in T]: string
}

type SetProp = (prop: string, text: string) => void
type GetOnInput = (
    prop: string
) => ({ target }: ChangeEvent<HTMLInputElement>) => void

export const useData = <T extends string>(
    ...props: T[]
): [Obj<T>, GetOnInput] => {
    const [value, setValue] = useState<Obj<T>>(
        props.reduce((o, key) => ({ ...o, [key]: '' }), {}) as Obj<T>
    )

    const setProp: SetProp = (prop, text) =>
        setValue((p) => ({ ...p, [prop]: text }))

    const getOnInput: GetOnInput =
        (prop) =>
        ({ target }) =>
            setProp(prop, target.value)

    return [value, getOnInput]
}
