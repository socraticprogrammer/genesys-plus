import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

import { ListUsersWithFilterByEmailController } from '../controllers'
import { Validation } from '../protocols'

export class ListUsersWithFilterByEmailValidation implements Validation {
  validate(input: Partial<ListUsersWithFilterByEmailController.Request>): Error | undefined {
    const validations: Validation[] = []
    for (const field of ['file']) {
      validations.push(new RequiredFieldValidation(field))
    }

    return new ValidationComposite(validations).validate(input)
  }
}
