const express = require("express");
const router = express.Router();

const sql = require("../sql");
const db = require("../config/mysql");

router.get("/api/login", (req, res) => {
    const member_id = req.query.member_id;
    const member_pw = req.query.password;
    if(member_id && member_pw){
        db.connect();
        db.query(`select * from member where member_id = '${member_id}' and password = '${member_pw}'`, function(error, results){
            if(error) res.send(error)

            else if(results === undefined){
                return res.json({
                    success: false,
                    id: "null"
                });
            }
            else{
                return res.json({
                    success: true,
                    id: member_id
                });
            }
        })
        db.end();
    }
    else{
        res.send("more inputValue");
    }
});

router.post("/api/join", (req, res) => {
    const params = [req.body.member_id, req.body.password, req.body.name, req.body.zipcode, req.body.address, req.body.phonenumber, req.body.mobilenumber, req.body.email];
    const query = `insert into member values('${params[0]}', '${params[1]}', '${params[2]}', ${params[3]}, '${params[4]}', '${params[5]}', '${params[6]}', '${params[7]}');`

    db.connect();
    db.query(query, function(err, results){
        if(err) {
            res.json({
                success: err
            });
        }

        else{
            res.json({
                success: true
            });
        }
    });

    db.end();
});

router.get("/api/find/id-with-email", (req, res) => {
    const name = req.query.name;
    const email = req.query.email;

    const query = `select * from member where name = '${name}' and email = '${email}'`;

    db.connect();
    db.query(query, function(error, results) {

        if(error) {
            res.json({
                id: error
            });
        }
        else if(results === undefined){
            return res.json({
                id: "false"
            });
        }
        else {
            return res.json({
                id: results[0].member_id
            });
        }
    })
    db.end();
});

router.get("/api/find/id-with-phonenumber", (req, res) => {
    const name = req.query.name;
    const phonenumber = req.query.phonenumber;

    const query = `select * from member where name = '${name}' and phonenumber = '${phonenumber}'`;

    db.connect();
    db.query(query, function(error, results) {

        if(error) {
            res.json({
                id: error
            });
        }
        else if(results === undefined){
            return res.json({
                id: "false"
            });
        }
        else {
            return res.json({
                id: results[0].member_id
            });
        }
    })

    db.end();
});

router.get("/api/find/passwd-with-email", (req, res) => {
    const id = req.query.member_id;
    const name = req.query.name;
    const email = req.query.email;

    const query = `select * from member where member_id = '${id}' and name = '${name}' and email = '${email}'`

    db.connect();
    db.query(query, function(error, results) {
        if(error) {
            res.json({
                success: error
            });
        }
        else if(results === undefined){
            return res.json({
                success: "false"
            });
        }
        else {
            return res.json({
                success: "true"
            });
        }
    })

    db.end();
});

router.get("api/find/passwd-find-phonenumber", (req, res) => {
    const id = req.query.member_id;
    const name = req.query.name;
    const phonenumber = req.query.phonenumber;

    const query = `select * from member where member_id = '${id}' and name = '${name}' and phonenumber = '${phonenumber}'`

    db.connect();
    db.query(query, function(error, results) {
        if(error) {
            res.json({
                id: error
            });
        }
        else if(results === undefined){
            return res.json({
                success: "false"
            });
        }
        else {
            return res.json({
                success: "true",
                id: id
            });
        }
    })

    db.end();
})

router.put("/api/modification-pw", (req, res) => {
    const password = req.query.password;
    const id = req.query.member_id;

    const query = `update member set password = '${password}' where id = '${id}'`;

    db.connect();
    db.query(query, function(error, results) {
        if(error) {
            res.json({
                success: error
            })
        }
        else {
            res.json({
                success: "true"
            })
        }
    })
})

module.exports = router