import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeUpdateQueuesController } from '../controllers'

export const makeUpdateQueuesRoute = (): ExpressController =>
  compose(adaptRoute, makeUpdateQueuesController)()
