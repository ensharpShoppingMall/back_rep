module.exports = {
    loginProcess: {
        query: `select member from where member_id = ? and password = ?`
    },

    joinProcess: {
        query: `insert into member set ?`
    },

    
}