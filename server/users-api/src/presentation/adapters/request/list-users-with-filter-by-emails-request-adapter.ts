import { ConvertBufferToWorkbook, ConvertWorkbookToJson } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { ListUsers } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class ListUsersWithFilterByEmailRequestAdapter
  implements RequestAdapter<ListUsers.Params['usersEmails']>
{
  constructor(private readonly sheetClient: ConvertBufferToWorkbook & ConvertWorkbookToJson) {}

  async adapt(
    params: ListUsersWithFilterByEmailRequestAdapter.Request
  ): Promise<ListUsers.Params['usersEmails']> {
    const usersEmails = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as ListUsersWithFilterByEmailRequestAdapter.FileObject[]

    return usersEmails.map(({ email }) => email.trim())
  }
}

export namespace ListUsersWithFilterByEmailRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
  }

  export interface FileObject {
    email: string
  }
}
