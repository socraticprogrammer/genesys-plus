import { WorkBook } from 'xlsx'
import * as XLSX from 'xlsx'

import {
  AppendSheetInBook,
  ConvertBufferToWorkbook,
  ConvertJsonToSheet,
  ConvertWorkbookToJson,
  CreateWorkbook,
  WriteWorkbookToBuffer
} from '@/app/contracts'

export class XlsxSheetClient
  implements
    ConvertBufferToWorkbook,
    ConvertWorkbookToJson,
    AppendSheetInBook,
    ConvertJsonToSheet,
    CreateWorkbook,
    WriteWorkbookToBuffer
{
  convertBufferToWorkbook(params: Buffer): WorkBook {
    return XLSX.read(params)
  }

  convertWorkbookToJson<T>(params: WorkBook): T[] {
    const workSheetName = params.SheetNames[0]
    const worksheet = params.Sheets[workSheetName]
    return XLSX.utils.sheet_to_json(worksheet)
  }

  createWorkbook(): WorkBook {
    return XLSX.utils.book_new()
  }

  appendSheetInBook({ workbook, worksheet, name }: AppendSheetInBook.Params): void {
    XLSX.utils.book_append_sheet(workbook, worksheet, name)
  }

  convertJsonToSheet(params: ConvertJsonToSheet.Params): XLSX.WorkSheet {
    return XLSX.utils.json_to_sheet(params)
  }

  writeWorkbookToBuffer(params: WorkBook): Buffer {
    return XLSX.write(params, { type: 'buffer', bookType: 'xlsx' })
  }
}
