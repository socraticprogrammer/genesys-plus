import { adaptRoute, adaptStreamRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeListUsersWithFilterByEmailController } from '../controllers'

export const makeListUsersWithFilterByEmailRoute = (isStream = false): ExpressController =>
  compose(isStream ? adaptStreamRoute : adaptRoute, makeListUsersWithFilterByEmailController)()
