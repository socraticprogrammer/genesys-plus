import { WorkBook } from 'xlsx'

export interface SheetClient {
  convertBufferToWorkbook(params: Buffer): WorkBook
  convertWorkbookToJson<T>(params: WorkBook): T[]
}
