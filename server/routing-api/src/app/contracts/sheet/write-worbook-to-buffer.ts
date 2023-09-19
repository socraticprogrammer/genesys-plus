import { WorkBook } from 'xlsx'

export interface WriteWorkbookToBuffer {
  writeWorkbookToBuffer(params: WriteWorkbookToBuffer.Params): WriteWorkbookToBuffer.Result
}

export namespace WriteWorkbookToBuffer {
  export type Params = WorkBook
  export type Result = Buffer
}
