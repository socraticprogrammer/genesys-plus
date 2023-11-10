import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeDeleteQueuesController } from '../controllers'

export const makeDeleteQueuesRoute = (): ExpressController =>
  compose(adaptRoute, makeDeleteQueuesController)()
