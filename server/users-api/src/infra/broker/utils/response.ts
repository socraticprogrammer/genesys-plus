import { ListUsersRepository } from '@/app/contracts'

export const formatListUsersResponse = (
  users: ListUsersRepository.Result['entities']
): ListUsersRepository.Result['entities'] =>
  users.map(({ id, name, email }) => ({ id, name, email }))
