import { ComponentType } from 'react'

type CompProps<
  P extends string,
  Hook extends () => unknown = () => unknown
> = Partial<Record<P, ReturnType<Hook>>>

type CompWithHookProps<
  P extends string,
  Hook extends () => unknown = () => unknown
> = {
  hook: Hook
  prop: P
  Comp: ComponentType<CompProps<P, Hook>>
}

const CompWithHook = <
  P extends string,
  Hook extends () => unknown = () => unknown
>({
  hook,
  prop,
  Comp,
}: CompWithHookProps<P, Hook>) => (
  <Comp {...({ [prop]: hook() } as CompProps<P, Hook>)} />
)

type IfHookProps<
  P extends string,
  Hook extends () => unknown = () => unknown
> = CompWithHookProps<P, Hook> & { cond: boolean }

export const IfHook = <
  P extends string,
  Hook extends () => unknown = () => unknown
>({
  prop,
  hook,
  Comp,
  cond,
}: IfHookProps<P, Hook>) =>
  cond ? <CompWithHook {...{ prop, hook, Comp }} /> : <Comp />
