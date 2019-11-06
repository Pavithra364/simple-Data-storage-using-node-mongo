
const usersController = require("../controllers/userController");

module.exports = (app) => {
    app.get('/users/health-check', function(req, res) {
        console.log("hello");
        res.status(200).end('ok');
    });

    app.route('/v2/getStudent/:_id')
        .get(usersController.getStudent)

    app.route('/v2/getStudent')
        .get(usersController.getStudentByclass)

    app.route('/v2/getAllStudentDetails')
        .get(usersController.getAllStudentDetails);

    app.route('/v2/removeStudent/:_id')
        .delete(usersController.removeStudent);
    
    app.route('/v2/insertStudent')
        .post(usersController.insertStudent);
    
    app.route('/v2/updateStudent')
        .put(usersController.updateStudent);
}