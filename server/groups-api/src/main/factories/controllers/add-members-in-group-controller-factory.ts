import { AddMembersInGroupController } from '@/presentation/controllers'

import { makeAddMembersInGroupRequestAdapter } from '../adapters'
import { makeAddMembersInGroup } from '../usecases'
import { makeAddMembersInGroupValidation } from '../validations'

export const makeAddMembersInGroupController = () =>
  new AddMembersInGroupController(
    makeAddMembersInGroupValidation(),
    makeAddMembersInGroupRequestAdapter(),
    makeAddMembersInGroup()
  )
