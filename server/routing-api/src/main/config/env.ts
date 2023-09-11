import { GenesysRegion } from '@/domain/models'

export const env = {
  GENESYS_CLIENT_ID: process.env.GENESYS_CLIENT_ID || '',
  GENESYS_CLIENT_SECRET: process.env.GENESYS_CLIENT_SECRET || '',
  GENESYS_REGION: process.env.GENESYS_REGION
    ? GenesysRegion[process.env.GENESYS_REGION as 'us-east-1' | 'sa-east-1']
    : GenesysRegion['us-east-1'],
  PORT: process.env.PORT || 3001
}
