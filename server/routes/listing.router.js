const express = require('express');
const router = express.Router();

const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'real_estate',
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('PG connected');
});

pool.on('error', (error) => {
    console.log('There was an error', error);
});

// Route that returns all properties (rent and sale)
router.get('/all', (req, res) => {
    console.log('GET /all route');
    let queryText = 'SELECT * FROM "listings" ORDER BY "id" DESC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows); // Rows will be an array of data from the server
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('POST / route')
    const listing = req.body; // Object send from the client with listing data
    const queryText = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
                       VALUES($1, $2, $3, $4, $5);`;
    pool.query(queryText, [listing.cost, listing.sqft, 
                           listing.type, listing.city, 
                           listing.image_path]).then((result) => {

        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
})

// Route param
// localhost:5002/listing/5 <- delete item with the id 5
router.delete('/:id', (req, res) => {
    // req.params.id = 5;
    console.log(req.params); // An object that has properties
    const listing_id = req.params.id;
    let queryText = 'DELETE FROM "listings" WHERE "id" = $1';
    pool.query(queryText, [listing_id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    });
})

module.exports = router;