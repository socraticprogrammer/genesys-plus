import { ListUsersWithFilterByEmailRequestAdapter } from '@/presentation/adapters/request/list-users-with-filter-by-emails-request-adapter'

import { makeXlsxSheetClient } from '../sheet'

export const makeListUsersWithFilterByEmailRequestAdapter = () =>
  new ListUsersWithFilterByEmailRequestAdapter(makeXlsxSheetClient())
