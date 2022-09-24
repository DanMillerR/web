declare global {
  type EmptyObj = Record<never, never>
  type AnyObj = Record<string, unknown>

  type PartialRecursively<T> = T extends AnyObj
    ? Partial<{
        [K in keyof T]: T[K] extends AnyObj ? PartialRecursively<T[K]> : T[K]
      }>
    : T

  type InterfaceToType<T> = {
    [K in keyof T]: T[K]
  }
}

export {} // todo: learn
