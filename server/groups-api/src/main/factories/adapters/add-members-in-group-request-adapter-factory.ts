import { makeXlsxSheetClient } from '@/main/factories/sheet/'
import { AddMembersInGroupRequestAdapter } from '@/presentation/adapters/request'

export const makeAddMembersInGroupRequestAdapter = () =>
  new AddMembersInGroupRequestAdapter(makeXlsxSheetClient())
