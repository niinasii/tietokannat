// client
const Client = require('pg').Client;
const conopts = {
    user: 'nodeclient', //postgresin tietokannan käyttäjätunnus
    password: 'Witcher3390',
    host: 'localhost', //tietokantapalvelin
    database: 'world' //tietokanta
}
// port: 5432
const asiakas = new Client(conopts);
asiakas.connect();
asiakas.query("select district, sum(population), count(*) from city where country_code='USA' group by district order by district;",
    (err, data) => {
        // virhekäsittely
        if (err) {
            console.error(err);
            process.exit(1);
        }
        // suljetaan yhteys
        asiakas.end();
        // tulosta haettu data
        console.log(data.rows);
    });

// Pool
const Pool = require('pg').Pool;
const conopts = {
    user: 'nodeclient',
    password: 'Witcher3390',
    host: 'localhost',
    database: 'kurssi'
}

const allas = new Pool(conopts);
allas.connect((err, client) => {
    client.query('SELECT id, nimi, ika FROM oppilas;', (err, data) => {
        client.release();
        console.log(data.rows);
    })
});