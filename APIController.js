const { status } = require('init');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { error } = require('console');
const { json } = require('stream/consumers');
const { connect } = require('http2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

connection.connect(function () {
    console.log('Database connected')
});


exports.insertbusiness = (req, res) => {
    console.log(req.body.business_id)
    var insert = 'insert into tbl_business ( business_name) values(?)';
    connection.query(insert, [
        req.body.business_name
    ],
        function (err, results) {
            if (err) {
                res.end(JSON.stringify(err))
            } else {
                res.end(JSON.stringify(results))
            }
        }
    )
}

exports.getbusinesdata = (req, res) => {
    console.log(req.params.id)
    var getBusiness = 'SELECT * FROM tbl_business WHERE business_id';
    connection.query(getBusiness,
        function (err, results) {
            if (err) throw err
            res.json(results);
        }

    )
}

// exports.deletebusiness = (req, res) => {
//     // console.log(req.params.id)
//     var deletedata = 'delete from tbl_business where business_id=?';
//     connection.query(deletedata, [req.params.id],
//         function (err, results) {
//             if (err) {
//                 res.end(json.stringify(err))
//             } else {
//                 res.json(results);
//             }
//         }
//     )
// }

// exports.idget = (req, res) => {
//     // console.log(req.params.id)
//     var idget = 'select * from tbl_business where business_id=?;';
//     connection.query(idget, [req.params.id],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }

// exports.insertdata = (req, res) => {
//     // console.log(req.body.business_id)
//     var insert = 'insert into tbl_category(business_id, category_name, category_type) values(?,?,?)';
//     connection.query(insert, [

//         req.body.business_id,
//         req.body.category_name,
//         req.body.category_type

//     ], function (err, results) {
//         if (err) {
//             res.end(JSON.stringify(err))
//         } else {
//             res.end(JSON.stringify(results))
//         }
//     })
// }

// // exports.GetsingleBusiness=(req,res)=>{
// //     // console.log(req.params.id);
// //     var singlerec='select * from tbl_category where business_id=?;';
// //     connection.query(singlerec,[req.params.id],
// //         function(err,results){
// //             if(err){
// //                 res.end(JSON.stringify(err))
// //             }else{
// //                 res.end(JSON.stringify(results))
// //             }
// //         }
// //     )
// // }

// exports.GetsingleBusiness = (req, res) => {
//     console.log(req.params.id);
//     var singlerec = "SELECT t.transaction_id,c.category_name,DATE_FORMAT(t.transaction_date, '%Y-%m-%d') AS transaction_date,t.transaction_category_type,t.remark, t.transaction_amount, t.transaction_business_id  FROM tbl_transaction t JOIN tbl_category c ON t.category_id = c.category_id WHERE t.transaction_business_id =?;";
//     connection.query(singlerec, [req.params.id],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 // console.log(JSON.stringify(results))
//                 res.end(JSON.stringify(results))
//             }
//         }
//     )
// }
// exports.deletebyId = (req, res) => {
//     // console.log(req.params.id)
//     var deletebyid = 'delete from tbl_category where category_id=?';
//     connection.query(deletebyid, [req.params.id],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.end(JSON.stringify(results))
//             }
//         }
//     )
// }

// exports.byIncategory = (req, res) => {
//     // console.log(req.params.id)
//     var bycat = 'select * from tbl_category where category_type="Cash In" and business_id=?';
//     connection.query(bycat, [req.params.id, req.body.category_type],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }

// exports.byOutcategory = (req, res) => {
//     // console.log(req.params.id)
//     var bycat = 'select * from tbl_category where category_type="Cash Out" and business_id=?';
//     connection.query(bycat, [req.params.id, req.body.category_type],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }

// // data post in add cash in button
// exports.postdata = (req, res) => {
//     console.log(req.body.business_id)
//     var post = 'insert into tbl_transaction(category_id,transaction_date, transaction_category_type,remark, transaction_amount,transaction_business_id) values(?,?,?,?,?,?)';
//     connection.query(post, [
//         req.body.category_id,
//         req.body.transaction_date,
//         req.body.transaction_category_type,
//         req.body.remark,
//         req.body.transaction_amount,
//         parseInt(req.body.transaction_business_id),

//     ],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }

// exports.postoutdata = (req, res) => {
//     console.log(req.body.business_id)
//     var postout = 'insert into tbl_transaction(category_id, transaction_date,transaction_category_type, remark, transaction_amount,transaction_business_id) values(?,?,?,?,?,?);';
//     connection.query(postout, [
//         req.body.category_id,
//         req.body.transaction_date,
//         req.body.transaction_category_type,
//         req.body.remark,
//         req.body.transaction_amount,
//         req.body.transaction_business_id,
//     ],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )
// }

// exports.getoneRecEdit = (req, res) => {
//     console.log(req.params.id);
//     var oneRec = "select category_id, DATE_FORMAT(transaction_date, '%Y-%m-%d') AS transaction_date, transaction_category_type, remark, transaction_amount, transaction_business_id from tbl_transaction where transaction_id=?;";
//     connection.query(oneRec, [req.params.id],
//         function (err, results) {
//             if (err) {
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.json(results)
//             }
//         }
//     )

// }

// exports.editrecord=(req, res)=>{
//     var edit="UPDATE tbl_transaction SET category_id=?, transaction_date=?,transaction_category_type=?,remark=?,transaction_amount=?,transaction_business_id=? WHERE transaction_id=?;";
//         var updateRec=[
//             req.body.category_id,
//             req.body.transaction_date,
//             req.body.transaction_category_type,
//             req.body.remark,
//             req.body.transaction_amount,
//             req.body.transaction_business_id
//         ]
//         connection.query(edit,[...updateRec, req.params.id],
//         function (err, results){
//             if(err){
//                 res.end(JSON.stringify(err))
//             }else{
//                 res.json(results)
//             }
//         }
//     )
// }

// // chart show data
// exports.chartshowdata=(req, res)=>{
//     var chart="SELECT transaction_business_id,YEAR(transaction_date) AS year,SUM(CASE WHEN transaction_category_type = 'Cash In' THEN transaction_amount ELSE 0 END) AS 'in', SUM(CASE WHEN transaction_category_type = 'Cash Out' THEN transaction_amount ELSE 0 END) AS 'out' FROM tbl_transaction WHERE transaction_business_id = 3 GROUP BY  transaction_business_id, YEAR(transaction_date) ORDER BY  year, transaction_business_id;"
//     connection.query(chart, [req.params.id],
//         function(err, results){
//             if(err){
//                 res.end(JSON.stringify(err))
//             }else{
//                 res.json(results)
//             }
//         }
//     )
// }