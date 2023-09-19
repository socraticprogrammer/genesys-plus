import { adaptRoute, adaptStreamRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeListGroupsController } from '../controllers'

export const makeListGroupsRoute = (isStream = false): ExpressController =>
  compose(isStream ? adaptStreamRoute : adaptRoute, makeListGroupsController)()
