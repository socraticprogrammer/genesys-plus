import { WorkBook } from 'xlsx'

export interface ConvertWorkbookToJson {
  convertWorkbookToJson<T>(params: WorkBook): T[]
}
