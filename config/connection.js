const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
        user: "root",
		password: "root",
		database: "burger_db",
    });
}

module.exports = connection;