import { WorkBook } from 'xlsx'
import * as XLSX from 'xlsx'

import { SheetClient } from '@/app/contracts'

export class XlsxSheetClient implements SheetClient {
  convertBufferToWorkbook(params: Buffer): WorkBook {
    return XLSX.read(params)
  }

  convertWorkbookToJson<T>(params: WorkBook): T[] {
    const workSheetName = params.SheetNames[0]
    const worksheet = params.Sheets[workSheetName]
    return XLSX.utils.sheet_to_json(worksheet)
  }
}
