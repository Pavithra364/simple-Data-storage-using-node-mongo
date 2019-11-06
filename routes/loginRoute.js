
const loginController = require("../controllers/loginController");

module.exports = (app) => {
    app.get('/users/health-check', function(req, res) {
        console.log("hello");
        res.status(200).end('ok');
    });
    
    app.route('/v2/login')
        .get(loginController.getUser)

    app.route('/v2/insert')
        .post(loginController.insertDetails)
}