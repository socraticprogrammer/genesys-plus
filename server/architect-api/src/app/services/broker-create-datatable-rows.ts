import { CreateDataTableRows } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { CreateDataTableRowRepository } from '../contracts'

export class BrokerCreateDataTableRows implements CreateDataTableRows {
  constructor(
    private readonly platformClient: PlatformClient,
    private readonly dataTableRepository: CreateDataTableRowRepository.Repository
  ) {}

  async create(params: CreateDataTableRows.Params): Promise<CreateDataTableRows.Result> {
    await this.platformClient.setup()
    if (!params?.length) return []
    return await Promise.all(params.map(row => this.dataTableRepository.createRow(row)))
  }
}
