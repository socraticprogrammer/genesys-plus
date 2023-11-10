import { makeXlsxSheetClient } from '@/main/factories/sheet/'
import { DeleteQueuesRequestAdapter } from '@/presentation/adapters/request'

export const makeDeleteQueuesRequestAdapter = () =>
  new DeleteQueuesRequestAdapter(makeXlsxSheetClient())
