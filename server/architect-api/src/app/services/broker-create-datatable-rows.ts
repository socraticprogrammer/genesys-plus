import { CreateDataTableRows } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { CreateDataTableRowRepository } from '../contracts'

export class BrokerCreateDataTableRows implements CreateDataTableRows {
  constructor(
    private readonly platformClient: PlatformClient,
    private readonly dataTableRepository: CreateDataTableRowRepository.Repository
  ) {}

  async create({
    rows,
    datatableId
  }: CreateDataTableRows.Params): Promise<CreateDataTableRows.Result> {
    await this.platformClient.setup()
    if (!rows?.length) return []
    return await Promise.all(
      rows.map(row => this.dataTableRepository.createRow({ datatableId, row }))
    )
  }
}
