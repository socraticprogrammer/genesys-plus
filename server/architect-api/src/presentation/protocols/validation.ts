export interface Validation {
  validate(input: any): Error | undefined
}

export interface AsyncValidation {
  validate(input: any): Promise<Error | undefined>
}
