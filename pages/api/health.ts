import type { NextApiRequest, NextApiResponse } from 'next'

type HealthResponse = {
  status: 'ok'
  service: string
  version: string
  timestamp: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HealthResponse>,
) {
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).json({
    status: 'ok',
    service: 'play2earnX',
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0',
    timestamp: new Date().toISOString(),
  })
}
