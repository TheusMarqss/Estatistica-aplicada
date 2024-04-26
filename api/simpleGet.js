const { Client } = require('pg')

module.exports = async (req, res) => {
  const client = new Client({
    connectionString: "postgres://default:r4XK3xIBHNCg@ep-sweet-silence-a4er4rbd.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: {
      rejectUnauthorized: false
    }
  })

  client.connect()

  const result = await client.query('SELECT * FROM simpleHistory')
  const results = { 'results': (result) ? result.rows : null}

  res.json(results)

  client.end()
}
