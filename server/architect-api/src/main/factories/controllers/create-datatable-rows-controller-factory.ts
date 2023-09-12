import { CreateDataTableRowsController } from '@/presentation/controllers'

import { makeCreateDataTableRowsRequestAdapter } from '../adapters'
import { makeCreateDataTableRows } from '../usecases'
import { makeCreateDataTableRowsValidation } from '../validations'

export const makeCreateDataTableRowsController = () =>
  new CreateDataTableRowsController(
    makeCreateDataTableRowsValidation(),
    makeCreateDataTableRowsRequestAdapter(),
    makeCreateDataTableRows()
  )
