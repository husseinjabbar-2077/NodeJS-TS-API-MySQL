import mysql, { Connection, MysqlError } from 'mysql';

//config database
const db: Connection = mysql.createConnection({
  host: 'localhost',
  port: 80,
  user: 'user',
  password: 'password',
  database: 'database'
});

// Connect to the MySQL database
db.connect((err: MysqlError) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

export default db;
