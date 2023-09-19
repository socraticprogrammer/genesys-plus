import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeListQueuesController } from '../controllers'

export const makeListQueuesRoute = (): ExpressController =>
  compose(adaptRoute, makeListQueuesController)()
