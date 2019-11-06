var loginService = require("../services/loginService");

class loginController
{

    // List of all users and their count Based on particular id 

    getUser(req,res)
    {
        let condition = {
            Email : req.query.email,
            Password : req.query.password
        }
        return loginService.userCheck(condition)
            .then((result) => {
                console.log(result);
                res.status(200).json("Login Successful");
            })
            .catch((err) => {
                console.log(err);
                res.status(401).json("Invalid credentials");
            });
    }

    // Inserting an user 

    insertDetails(req,res){
        let userInfo = req.body.attributes;
        return loginService.insertUsers(userInfo)
        .then(() => {
            console.log("inserted");
            res.status(200).json("Inserted Successfully");
        })
        .catch((err) => {
            console.log(err);
             res.status(400).json("Not Inserted");
        })
    }
}

exports = module.exports = new loginController();