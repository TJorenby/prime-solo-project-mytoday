const express = require('express');
const fileUpload = require('express-fileupload');
const pool = require('../modules/pool');
const router = express.Router();

router.use(fileUpload());

// GET events from db
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "events";`;

    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.error('Error completing GET Events query', err);
            res.sendStatus(500);
        });
});


//POST event to db and move associated file to storage
router.post('/', (req, res) => {

    const file = req.files.file;
    const timestamp = Date.now(); // used for adding timestamp to file name. Prevents duplicate file names. 
    const date = new Date(); // passed into pool.query

    console.log('reqFiles is:', req.files);
    console.log('req.body is:', req.body);

    file.mv(`./public/uploads/${timestamp}-${file.name}`, err => {
        if (err) {
            console.error('MV ERROR. Unable to add file to storage', err);
            return res.status(500).send(err)
        }
    }); // moves uploaded file to storage.

    const fileUrl = `./public/uploads/${timestamp}-${file.name}`

    const queryText = `
    INSERT INTO "events" ("date", "user_id", "title", "description", "file_url", "highlight")
      VALUES ($1, $2, $3, $4, $5, $6);`;

    pool.query(queryText, [date, req.body.user_id, req.body.title, req.body.description, fileUrl, req.body.highlight])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.error('Error completing POST ITEM query', err);
            res.sendStatus(500);
        });
});

//DELETE event by id
router.delete('/:id', (req, res) => {
    // DELETE route code here
    const queryText = `DELETE FROM "events" WHERE id=$1;`;

    pool.query(queryText, [req.body.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.error('Error completing DELETE ITEM query', err);
            res.sendStatus(500);
        });
});



module.exports = router;