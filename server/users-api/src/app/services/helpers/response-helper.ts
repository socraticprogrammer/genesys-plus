import { ListUsers } from '@/domain/usecases'

export const filterUsersWithEmails = (
  users: ListUsers.Result,
  usersEmails: string[]
): ListUsers.Result =>
  users.filter(({ email }) => {
    return usersEmails.includes(email?.trim() ?? '')
  })
