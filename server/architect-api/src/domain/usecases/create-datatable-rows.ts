import { DataTableRow } from '../models'

export interface CreateDataTableRows {
  create(params: CreateDataTableRows.Params): Promise<CreateDataTableRows.Result>
}

export namespace CreateDataTableRows {
  export interface CreateDataTableRowsDTO {
    rows: DataTableRow[]
    datatableId: string
  }

  export type Params = CreateDataTableRowsDTO

  export type Result = DataTableRow[]
}
