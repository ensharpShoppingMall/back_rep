const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

const sql = require("../sql");
const dbPool = require("../config/db_pool");

//console.log(dbPool)

const session = require("express-session");

/*app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));
*/
router.post("/api/login", async (req, res) => {
    const member_id = req.body.id;
    const member_pw = req.body.password;

    if(member_id && member_pw){
        dbPool.query(sql.loginProcess, [member_id, member_pw], function(error, results) {
            if(error) res.send({
                error: "Please try again or contact system manager."
            })

            if(!results[0]){
                res.send("not match information")
            }
            else{
                res.send(req.body.id)
            }
        })
    }
    else{
        res.send("more inputValue");
    }
});

router.put("/api/join", (req, res) => {

});

router.post("/api/find/id", (req, res) => {

});

router.post("/api/find/passwd", (req, res) => {

});



module.exports = router