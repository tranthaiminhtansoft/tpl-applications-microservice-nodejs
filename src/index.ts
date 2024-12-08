import Express from 'express'

export const app = Express()

app.get('/', (req, res) => {
  res.send("Hello world\n")
})