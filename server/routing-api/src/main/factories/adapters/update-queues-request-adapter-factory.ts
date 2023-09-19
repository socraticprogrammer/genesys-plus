import { makeXlsxSheetClient } from '@/main/factories/sheet/'
import { UpdateQueuesRequestAdapter } from '@/presentation/adapters/request'

export const makeUpdateQueuesRequestAdapter = () =>
  new UpdateQueuesRequestAdapter(makeXlsxSheetClient())
