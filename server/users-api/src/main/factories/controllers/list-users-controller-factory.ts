import { ListUserController } from '@/presentation/controllers'

import { makeListUsers } from '../usecases'

export const makeListUsersController = () => new ListUserController(makeListUsers())
