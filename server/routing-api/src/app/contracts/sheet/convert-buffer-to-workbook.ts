import { WorkBook } from 'xlsx'

export interface ConvertBufferToWorkbook {
  convertBufferToWorkbook(params: Buffer): WorkBook
}
