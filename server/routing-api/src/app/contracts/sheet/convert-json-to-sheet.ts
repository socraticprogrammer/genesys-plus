import { WorkSheet } from 'xlsx'

export interface ConvertJsonToSheet {
  convertJsonToSheet(params: ConvertJsonToSheet.Params): ConvertJsonToSheet.Result
}

export namespace ConvertJsonToSheet {
  export type Params = any
  export type Result = WorkSheet
}
