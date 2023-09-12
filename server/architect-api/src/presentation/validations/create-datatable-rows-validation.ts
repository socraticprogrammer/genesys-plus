import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

import { CreateDataTableRowsController } from '../controllers'
import { Validation } from '../protocols'

export class CreateDataTableRowsValidation implements Validation {
  validate(input: Partial<CreateDataTableRowsController.Request>): Error | undefined {
    const validations: Validation[] = []
    for (const field of ['file']) {
      validations.push(new RequiredFieldValidation(field))
    }

    return new ValidationComposite(validations).validate(input)
  }
}
