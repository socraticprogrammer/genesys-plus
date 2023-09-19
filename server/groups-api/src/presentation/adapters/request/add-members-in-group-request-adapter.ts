import { ConvertBufferToWorkbook, ConvertWorkbookToJson } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { AddMembersInGroup } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class AddMembersInGroupRequestAdapter
  implements RequestAdapter<AddMembersInGroup.Params['memberIds']>
{
  constructor(private readonly sheetClient: ConvertBufferToWorkbook & ConvertWorkbookToJson) {}

  async adapt(
    params: AddMembersInGroupRequestAdapter.Request
  ): Promise<AddMembersInGroup.Params['memberIds']> {
    const members = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as AddMembersInGroupRequestAdapter.FileObject[]

    return members.map(({ userId }) => userId?.trim())
  }
}

export namespace AddMembersInGroupRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
  }

  export interface FileObject {
    userId: string
  }
}
