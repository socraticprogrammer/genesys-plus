import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeAddMembersInGroupController } from '../controllers'

export const makeAddMembersInGroupRoute = (): ExpressController =>
  compose(adaptRoute, makeAddMembersInGroupController)()
