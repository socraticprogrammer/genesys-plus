import { ListGroupsController } from '@/presentation/controllers'

import { makeListGroups } from '../usecases'

export const makeListGroupsController = () => new ListGroupsController(makeListGroups())
