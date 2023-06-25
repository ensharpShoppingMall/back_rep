const express = require("express");
const router = express.Router();

const sql = require("../sql");
const db = require("../config/mysql");

router.get("/", (req, res) => {
    const query = `select * from item`;

    db.connect();
    db.query(query, function(error, results) {
        if(error) {
            return res.json({
                success: error
            });
        }
        const data = results.rows.map(row => ({
            item_name: row.item_name,
            price: row.price,
            item_thum: row.item_thum
        }));

        res.json(data);
    })
    
    db.end();
})

router.get("/detail", (req, res) => {
    const product_number = req.query.item_id;

    const query = `select * from item where item_id = '${product_number}'`;

    db.connect();
    db.query(query, function(error, results1) {
        if(error) {
            return res.json({
                success: error
            });
        }

        query = `select * from item_img where item_id = '${product_number}'`;
        db.query(query, function(error, results2) {
            if(error) {
                return res.json({
                    success: error
                });
            }
            const data1 = results1.rows.map(row => ({
                item_detail: row.item_detail,
                item_name: row.item_name,
                price: row.price,
                status: row.status,
            }));

            const data2 = results2.rows.map(row => ({
                img_url: row.img_url
            }));

            res.json({results1: data1, results2: data2});

        });
    });

    db.end();
});

module.exports = router