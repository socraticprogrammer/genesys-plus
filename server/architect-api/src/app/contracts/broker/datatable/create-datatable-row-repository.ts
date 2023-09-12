import { DataTableRow } from '@/domain/models'
import { CreateDataTableRows } from '@/domain/usecases'

export namespace CreateDataTableRowRepository {
  export type DTO = CreateDataTableRows.CreateDataTableRowsDTO
  export type Result = Omit<DataTableRow, 'datatableId'>
  export interface Repository {
    createRow(dto: DTO): Promise<Result>
  }
}
