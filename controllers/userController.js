var userService = require("../services/userService");
var response = require('../lib/response');
var Joi = require('joi');
var validator = require('../utils/validate');

class userController
{

    // List of all students 

    getAllStudentDetails(req,res)
    {
        let projection = {
            _id : 0 
        }
        return userService.AllStudents(projection)
            .then((result) => {
                return response.send(200,"THE-STUDENTS-DETAILS",result,req,res);
            })
            .catch((err) => {
                return response.error(400,"UNABLE-TO-FETCH-THE-DETAILS",req,res);
            });
    }

    // List of all users and their count Based on particular id 

    getStudent(req,res)
    {
        let condition = {
            ID_Number : req.params._id
        }
        let projection = {
            _id : 0 
        }
        
        const studentSchema = Joi.object().options({
            abortEarly: false
        }).keys({
            ID_Number: Joi.string().min(1).required()
        });

        const student_values = {
            ID_Number: req.params._id,
        };

        const validateResult = validator.validate(student_values, studentSchema);
        if (validateResult.error !== null) {
            return response.error(response.buildError(400, 'REQUIRED-FIELDS-ARE-MISSING'),
                '', req, res);
        }

        return userService.findStudent(condition,projection)
        .then((result) => {
            return response.send(200,"THE-STUDENTS-DETAILS",result,req,res);
        })
        .catch((err) => {
            return response.error(400,"UNABLE-TO-FETCH-THE-DETAILS",req,res);
        });
    }

    // The students details based on class wise

    getStudentByclass(req,res)
    {
        let condition = {
            Class : req.query.class
        }
        let projection = {
            _id : 0 
        }

        var studentSchema = Joi.object().options({
            abortEarly : false
        }).keys({
            Class : Joi.string().min(1).required()
        })

        var student_values = {
            Class : req.query.class
        }

        const validateResult = validator.validate(student_values, studentSchema);
        if (validateResult.error !== null) {
            return response.error(response.buildError(400, 'REQUIRED-FIELDS-ARE-MISSING'),
                '', req, res);
        }

        let list ;
        return userService.findStudent(condition,projection)
            .then((result) => {
                list = result;
                return userService.findCount(condition);
            })
            .then((result) => {
                list = {
                    studentDetails : list,
                    totalStudents : result
                }
                return response.send(200,"GET-STUDENT-DETAILS",list,req,res);
            })
            .catch((err) => {
                return response.error(400,"UNABLE-TO-INSERT-DETAILS",req,res);
            });
    }

    // Inserting the student

    insertStudent(req,res){
        let studentInfo = req.body.attributes;
        return userService.insertStudents(studentInfo)
        .then((result) => {
            console.log(result);
            return response.send(200,"INSERT-STUDENT-SUCCESSFULLY",result,req,res);
        })
        .catch((err) => {
            return response.error(400,"UNABLE-TO-INSERT-DETAILS",req,res);
        });
    }

    // Upadate the student 

    updateStudent(req,res){
        let attributes = req.body.attributes;
        let updateInfo = {
            class : attributes.class
        }
        let condition = {   
            ID_Number : req.query.id,
        }

        var studentSchema = Joi.object().options({
            Class : Joi.string(),
            ID_Number : Joi.string().required()
        })

        var student_values = {
            Class : attributes.class,
            ID_Number : req.query.id
        }

        const validateResult = validator.validate(studentSchema,student_values);
        if(validateResult.error !== null ){
            return response.error(response.buildError(400, 'REQUIRED-FIELDS-ARE-MISSING'),
                '', req, res);
        }

        return userService.updateStudentDetails(condition,updateInfo)
        .then((result) => {
            return response.send(200,"THE-STUDENTS-DETAILS-ARE-UPDATED-SUCCESSFULLY",result,req,res);
        })
        .catch((err) => {
            return response.error(400,"UNABLE-TO-UPDATE",req,res);
        });
    }

    // Remove the user

    removeStudent(req,res){
        let condition = {
            ID_Number : req.params._id
        }

        var studentSchema = Joi.object().options({
            ID_Number : Joi.string()
        })
        
        var student_values = {
            ID_Number : req.params._id
        }

        const validateResult = validator.validate(studentSchema,student_values);
        if(validateResult.error !== null ){
            return response.error(response.buildError(400, 'REQUIRED-FIELDS-ARE-MISSING'),
                '', req, res);
        }

        return userService.removeStudentById(condition)
        .then((result) => {
            return response.send(200,"THE-STUDENTS-DETAILS-REMOVED-SUCCESSFULLY",result,req,res);
        })
        .catch((err) => {
            return response.error(400,"UNABLE-TO-REMOVE",req,res);
        });
    }
}

exports = module.exports = new userController();