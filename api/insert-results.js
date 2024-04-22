const { Client } = require('pg')

module.exports = async (req, res) => {
  const client = new Client({
    connectionString: "postgres://default:r4XK3xIBHNCg@ep-sweet-silence-a4er4rbd.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: {
      rejectUnauthorized: false
    }
  })

  client.connect()

  const { value1, value2, result } = req.body;

  const query = {
    text: 'INSERT INTO history(value1, value2, result) VALUES($1, $2, $3)',
    values: [value1, value2, result],
  }

  await client.query(query)

  res.json({ status: 'success' })

  client.end()
}
