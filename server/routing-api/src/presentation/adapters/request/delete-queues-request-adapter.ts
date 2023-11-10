import { ConvertBufferToWorkbook, ConvertWorkbookToJson } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { DeleteQueues } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class DeleteQueuesRequestAdapter implements RequestAdapter<DeleteQueues.Params> {
  constructor(private readonly sheetClient: ConvertBufferToWorkbook & ConvertWorkbookToJson) {}

  async adapt(params: DeleteQueuesRequestAdapter.Request): Promise<DeleteQueues.Params> {
    const queues = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as DeleteQueuesRequestAdapter.FileObject[]

    return queues.map(({ id }) => {
      return {
        id: id?.trim()
      }
    })
  }
}

export namespace DeleteQueuesRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
  }

  export interface FileObject {
    id: string
  }
}
