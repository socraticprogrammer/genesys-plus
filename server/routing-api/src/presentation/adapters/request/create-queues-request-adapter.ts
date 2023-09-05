import { SheetClient } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { CreateQueues } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class CreateQueuesRequestAdapter implements RequestAdapter<CreateQueues.Params> {
  constructor(private readonly sheetClient: SheetClient) {}

  async adapt(params: CreateQueuesRequestAdapter.Request): Promise<CreateQueues.Params> {
    const queues = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as CreateQueuesRequestAdapter.FileObject[]

    console.log(queues)

    return []
  }
}

export namespace CreateQueuesRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
  }

  export interface FileObject {
    queueName: string
  }
}
