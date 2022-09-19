import { ComponentType } from 'react'

type CompWithHookProps = {
  hook: () => unknown
  prop: string
  Comp: ComponentType<AnyObj>
}

const CompWithHook = ({ hook, prop, Comp }: CompWithHookProps) => {
  return <Comp {...{ [prop]: hook() }} />
}

type IfHookProps = CompWithHookProps & { cond: boolean }

export const IfHook = ({ prop, hook, Comp, cond }: IfHookProps) =>
  cond ? <CompWithHook {...{ prop, hook, Comp }} /> : <Comp />
