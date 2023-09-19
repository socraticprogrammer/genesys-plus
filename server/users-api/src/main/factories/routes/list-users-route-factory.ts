import { adaptRoute, adaptStreamRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeListUsersController } from '../controllers'

export const makeListUsersRoute = (isStream = false): ExpressController =>
  compose(isStream ? adaptStreamRoute : adaptRoute, makeListUsersController)()
