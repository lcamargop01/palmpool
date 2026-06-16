import { Hono } from 'hono'
import html from '../palm-pool-spa.html?raw'

const app = new Hono()

// Serve the Palm Pool & Spa app at root and /palm-pool-spa.html
app.get('/', (c) => c.html(html))
app.get('/palm-pool-spa.html', (c) => c.html(html))

export default app
