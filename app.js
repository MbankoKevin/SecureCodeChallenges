const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { Client } = require('pg');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect();

const upload = multer({ dest: 'uploads/' });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await client.query(`SELECT id, password_hash FROM users WHERE username = '${username}'`);
  if (result.rows.length === 0) return res.status(401).send('invalid');
  const user = result.rows[0];
  if (user.password_hash === password) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.json({ token });
  }
  return res.status(401).send('invalid');
});

app.get('/products', async (req, res) => {
  const q = req.query.q || '';
  const result = await client.query(`SELECT * FROM products WHERE name ILIKE '%${q}%'`);
  res.json(result.rows);
});

app.post('/products', upload.single('image'), async (req, res) => {
  const { name, price } = req.body;
  const image = req.file;
  // save file path in DB
  await client.query(`INSERT INTO products (name, price, image_path) VALUES ('${name}', ${price}, '${image.path}')`);
  res.send('ok');
});

app.get('/admin/export', (req, res) => {
  const token = req.headers.authorization;
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  if (payload.role !== 'admin') return res.status(403).send('forbidden');
  const data = fs.readFileSync('./data/export.csv');
  res.setHeader('Content-Type', 'text/csv');
  res.send(data);
});

app.listen(3000);
