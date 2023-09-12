import { SheetClient } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { DataTableRow } from '@/domain/models'
import { CreateDataTableRows } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class CreateDataTableRowsRequestAdapter
  implements RequestAdapter<CreateDataTableRows.Params>
{
  constructor(private readonly sheetClient: SheetClient) {}

  async adapt(
    params: CreateDataTableRowsRequestAdapter.Request
  ): Promise<CreateDataTableRows.Params> {
    const rows = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as CreateDataTableRowsRequestAdapter.FileObject[]

    return {
      rows,
      datatableId: params?.datatableId?.trim()
    }
  }
}

export namespace CreateDataTableRowsRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
    datatableId: string
  }

  export type FileObject = DataTableRow
}
