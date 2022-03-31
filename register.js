
const validator = require('validator');

var crudschema=require('../modal/crudschema');

exports.register=function(req,res)
{
    const us=new crudschema
    us.username=req.body.username,
    // user.gender=req.body.gender,
    us.password=req.body.password,
    us.email=req.body.email

    us.save(function (err, data) {
                if (us.username === "" || us.email === "" || us.password === "") {
                    res.send('please enter the field')
                }
                else if (us.username.length >= 10) {
                    res.send(" Username max length 10 char only")
                }
                else if (isNaN(us.password)) {
                    res.send('numberic value only ')
                }
                else if (err) {
                    res.send('Already exist')
                }
                else {
                    res.send('registration success')
                }
})
}
