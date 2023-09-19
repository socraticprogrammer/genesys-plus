import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

import { AddMembersInGroupController } from '../controllers'
import { Validation } from '../protocols'

export class AddMembersInGroupValidation implements Validation {
  validate(input: Partial<AddMembersInGroupController.Request>): Error | undefined {
    const validations: Validation[] = []
    for (const field of ['file', 'groupId']) {
      validations.push(new RequiredFieldValidation(field))
    }

    return new ValidationComposite(validations).validate(input)
  }
}
