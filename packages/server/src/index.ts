import { divide } from '@monorepo/core'
import express from 'express'

const app = express()

app.get('/', (_, res) => {
  res.send(`
${JSON.stringify(divide(100, 0))}
${JSON.stringify(divide(100, 20))}
`)
})

app.listen(4000)
