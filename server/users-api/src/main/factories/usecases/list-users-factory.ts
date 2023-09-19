import { BrokerListUsers } from '@/app/services'

import { makePlatformClient, makeUserGenesysRepository } from '../broker'

export const makeListUsers = () =>
  new BrokerListUsers(makePlatformClient(), makeUserGenesysRepository())
