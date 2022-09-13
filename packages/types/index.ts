export type EmptyObj = Record<never, never>
export type AnyObj = Record<string, unknown>

export type PartialRecursively<T> = T extends AnyObj
  ? Partial<{
      [K in keyof T]: T[K] extends AnyObj
        ? Partial<PartialRecursively<T[K]>>
        : T[K]
    }>
  : T
