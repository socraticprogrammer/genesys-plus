import { WorkBook, WorkSheet } from 'xlsx'

export interface AppendSheetInBook {
  appendSheetInBook(params: AppendSheetInBook.Params): void
}

export namespace AppendSheetInBook {
  export interface Params {
    workbook: WorkBook
    worksheet: WorkSheet
    name?: string
  }
}
