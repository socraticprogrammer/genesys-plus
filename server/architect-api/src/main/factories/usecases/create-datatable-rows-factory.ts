import { BrokerCreateDataTableRows } from '@/app/services'

import { makeDataTableGenesysRepository, makePlatformClient } from '../broker'

export const makeCreateDataTableRows = () =>
  new BrokerCreateDataTableRows(makePlatformClient(), makeDataTableGenesysRepository())
