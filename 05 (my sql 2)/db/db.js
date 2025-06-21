import mysql2 from "mysql2";

const myDB = mysql2.createPool({
    host: 'localhost',
    password: '00000000',
    database: 'practice',
    user: 'root',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

export {myDB};