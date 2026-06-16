import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  return c.redirect('/palm-pool-spa.html')
})

export default app
