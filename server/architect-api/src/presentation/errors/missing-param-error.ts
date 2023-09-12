export class MissingParamError extends Error {
  constructor(param: string) {
    super(`Missing param: ${param}`)
    this.name = 'MISSING_PARAM_ERROR'
  }
}
