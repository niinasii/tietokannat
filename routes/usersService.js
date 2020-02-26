require('dotenv').config()
const Pool = require('pg').Pool;

const salasana = process.env.PGPASSWORD;
const pguser = process.env.PGUSER;
const pgdatabase = process.env.PGDATABASE;
const pghost = process.env.PGHOST;

const conopts = {
    user: pguser,
    password: salasana,
    host: pghost,
    database: pgdatabase
}

const allas = new Pool(conopts);

const getUsers = (callback) => {
    allas.query("SELECT * FROM oppilas", (error, data) => {
        console.dir(data.rows);
        callback(data.rows);
    })
}

const getUser = (id, callback) => {
    allas.query("SELECT * FROM oppilas where id =$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rows);
    })
}

const deleteUser = (id, callback) => {
    allas.query("DELETE FROM oppilas WHERE id=$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const insertUser = (newuser, callback) => {
    const { nimi, ika } = newuser;
    allas.query("INSERT INTO oppilas (nimi, ika) VALUES ($1, $2)", [nimi, ika], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const updateUser = (user, id, callback) => {
    const { nimi, ika } = user;
    allas.query("UPDATE oppilas SET nimi=$1, ika=$2 WHERE id=$3", [nimi, ika, id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

module.exports = { getUsers, getUser, insertUser, deleteUser, updateUser }