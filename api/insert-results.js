const { Client } = require('pg')

module.exports = async (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
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
