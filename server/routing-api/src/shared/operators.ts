type GenericFunction = (...args: any[]) => any

export const partialize = (fn: GenericFunction, ...args: any[]): GenericFunction =>
  fn.bind(null, ...args)

export const compose =
  (...fns: GenericFunction[]) =>
  (value?: any) =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), value)

export const pipe =
  (...fns: GenericFunction[]) =>
  (value: any) =>
    fns.reduce((previousValue, fn) => fn(previousValue), value)
