import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeCreateQueuesController } from '../controllers'

export const makeCreateQueuesRoute = (): ExpressController =>
  compose(adaptRoute, makeCreateQueuesController)()
