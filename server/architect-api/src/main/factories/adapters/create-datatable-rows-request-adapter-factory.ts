import { makeXlsxSheetClient } from '@/main/factories/sheet/'
import { CreateDataTableRowsRequestAdapter } from '@/presentation/adapters/request'

export const makeCreateDataTableRowsRequestAdapter = () =>
  new CreateDataTableRowsRequestAdapter(makeXlsxSheetClient())
