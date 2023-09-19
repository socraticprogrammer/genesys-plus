import { adaptRoute, adaptStreamRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeListQueuesController } from '../controllers'

export const makeListQueuesRoute = (isStream = false): ExpressController =>
  compose(isStream ? adaptStreamRoute : adaptRoute, makeListQueuesController)()
