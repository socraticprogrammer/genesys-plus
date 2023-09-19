import { type Request, type Response } from 'express'
import stream from 'stream'

import { XlsxSheetClient } from '@/infra/sheet'
import { Gateway } from '@/presentation/protocols'

import { ExpressController } from './express-route-adapter'

type AdapterRequest = Request & {
  file?: any
}

export const adaptStreamRoute =
  (controller: Gateway): ExpressController =>
  async (req: AdapterRequest, res: Response) => {
    const request = {
      ...(req.query ?? {}),
      ...(req.body ?? {}),
      ...(req.params ?? {}),
      file: req?.file
    }

    const httpResponse = await controller.handle(request)

    if (!httpResponse.body?.data) return res.status(204)

    const sheetClient = new XlsxSheetClient()
    const workbook = sheetClient.createWorkbook()
    const worksheet = sheetClient.convertJsonToSheet(httpResponse.body?.data)
    sheetClient.appendSheetInBook({ workbook, worksheet })
    const buffer = sheetClient.writeWorkbookToBuffer(workbook)

    const readStream = new stream.PassThrough()
    readStream.end(buffer)

    res.set('Content-Encoding', 'base64')
    res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.set(
      'Content-Disposition',
      `attachment; filename=${httpResponse?.body?.fileName ?? 'data'}.xlsx`
    )

    return readStream.pipe(res)
  }
