import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

import { CreateQueuesController } from '../controllers'
import { Validation } from '../protocols'

export class CreateQueuesValidation implements Validation {
  validate(input: Partial<CreateQueuesController.Request>): Error | undefined {
    const validations: Validation[] = []
    for (const field of ['file']) {
      validations.push(new RequiredFieldValidation(field))
    }

    return new ValidationComposite(validations).validate(input)
  }
}
