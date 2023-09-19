import { WorkBook } from 'xlsx'

export interface CreateWorkbook {
  createWorkbook(): CreateWorkbook.Result
}

export namespace CreateWorkbook {
  export type Result = WorkBook
}
