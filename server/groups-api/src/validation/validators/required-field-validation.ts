import { MissingParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly field: string) {}

  validate(input: any): Error | undefined {
    if (input[this.field] === undefined || input[this.field] === null) {
      return new MissingParamError(this.field)
    }
  }
}
