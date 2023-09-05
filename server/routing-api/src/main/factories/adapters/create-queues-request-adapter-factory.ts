import { makeXlsxSheetClient } from '@/main/factories/sheet/'
import { CreateQueuesRequestAdapter } from '@/presentation/adapters/request'

export const makeCreateQueuesRequestAdapter = () =>
  new CreateQueuesRequestAdapter(makeXlsxSheetClient())
