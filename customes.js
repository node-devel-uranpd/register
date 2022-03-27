// const Schema1 = require('../models/user')
// exports.signup = function (req, res) {
//     const us = new Schema1
//     us.username = req.body.username,
//         us.email = req.body.email,
//         us.password = req.body.password
//     us.save(function (err, data) {
//         if (us.username === "" || us.email === "" || us.password === "") {
//             res.send('please enter the field')
//         }
//         else if (us.username.length >= 10) {
//             res.send(" Username max length 10 char only")
//         }
//         else if (isNaN(us.password)) {
//             res.send('numberic value only ')
//         }
//         else if (err) {
//             res.send('error')
//         }
//         else {
//             res.send('registration success')
//         }
//     })
// }