import { ListUsersWithFilterByEmailController } from '@/presentation/controllers'

import { makeListUsersWithFilterByEmailRequestAdapter } from '../adapters'
import { makeListUsers } from '../usecases'
import { makeListUsersWithFilterByEmailValidation } from '../validations'

export const makeListUsersWithFilterByEmailController = () =>
  new ListUsersWithFilterByEmailController(
    makeListUsersWithFilterByEmailValidation(),
    makeListUsersWithFilterByEmailRequestAdapter(),
    makeListUsers()
  )
