import { adaptRoute, ExpressController } from '@/main/adapters'
import { compose } from '@/shared/operators'

import { makeCreateDataTableRowsController } from '../controllers'

export const makeCreateDataTableRowsRoute = (): ExpressController =>
  compose(adaptRoute, makeCreateDataTableRowsController)()
