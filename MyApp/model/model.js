const mysql = require('promise-mysql')

const CONFIGURATION_CONNECT_MYSQL = {
    database: "myappdb",
    user: "myapp",
    password: "102030",
    host: "localhost",
    port: ""
}

async function getConnectionMySQL() {
    return await mysql.createConnection(CONFIGURATION_CONNECT_MYSQL)
}

async function insertName(name) {
    try {
        const connection = await getConnectionMySQL()

        const result = await connection.query('INSERT INTO tbl_name SET tbl_name.name = ?', name)

        return (result.affectedRows > 0)
    } catch (error) {
        console.error(error)
        return false;
    }
}

module.exports = {
    insertName
}

async function debug() {
    await insertName('Ricardo Martins')
}

debug()