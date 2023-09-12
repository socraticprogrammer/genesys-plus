import { DataTableRow } from '@/domain/models'
import { CreateDataTableRows } from '@/domain/usecases'

export namespace CreateDataTableRowRepository {
  export type DTO = {
    row: DataTableRow
    datatableId: string
  }
  export type Result = DataTableRow
  export interface Repository {
    createRow(dto: DTO): Promise<Result>
  }
}
