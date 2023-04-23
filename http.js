const http = require('http');
const mysql = require('mysql');

const hostname = 'localhost';
const port = 3000;

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'db1'
});

con.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database');
});

const server = http.createServer((req, res) => {
  const nameQuery = 'SELECT * FROM department';

  con.query(nameQuery, (err, result) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    result.forEach((row) => {
      res.write(row.dept_name+'\n');
    });
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

