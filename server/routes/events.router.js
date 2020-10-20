const express = require('express');
const fileUpload = require('express-fileupload');
const pool = require('../modules/pool');
const router = express.Router();

router.use(fileUpload());

// GET events from db
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "events" ORDER BY "date" DESC;`;

    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.error('Error completing GET Events query', err);
            res.sendStatus(500);
        });
});


//POST event to db and move associated file to storage
router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }

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

    const fileUrl = `./uploads/${timestamp}-${file.name}`

    const queryText = `
    INSERT INTO "events" ("date", "user_id", "description", "file_url", "highlight")
      VALUES ($1, $2, $3, $4, $5);`;

    pool.query(queryText, [date, req.body.user_id, req.body.description, fileUrl, req.body.highlight])
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
            console.error('Error completing DELETE EVENT query', err);
            res.sendStatus(500);
        });
});

// PUT route for updating Highlight and Event description fields
router.put('/:id', (req, res) => {
    console.log('req.body is:', req.body);
    const queryText = `UPDATE "events" 
	SET "description" = $1, "highlight" = $2
	WHERE "id" = $3;`;

    pool.query(queryText, [req.body.description, req.body.highlight, req.body.id])
        .then(response => {
            console.log('updated Event:', response);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(`Error making db query: ${queryText}`, err);
            res.sendStatus(500);
        })

});



module.exports = router;