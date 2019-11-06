'use strict';
const userserviceModel = require('../models/userModel');

class userService {

      /** Get transactions
     * @param condition
     * @return Promise
     * */
    findStudent(condition,projection) {
        return new Promise((resolve, reject) => {
                return userserviceModel.find(condition,projection)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    insertStudents(studentInfo){
        return new Promise((resolve, reject) => {
            return userserviceModel.save(studentInfo)
            .then((result) => {
                return resolve(result);
            })
            .catch((err) => {
                return reject(err);
            });
        });
    }

    updateStudentDetails(condition,updateInfo){
        return new Promise((resolve, reject) => {
            return userserviceModel.update(condition,updateInfo)
            .then((result) => {
                return resolve(result);
            })
            .catch((err) => {
                return reject(err);
            });
        });
    }

    removeStudentById(condition){
        return new Promise((resolve, reject) => {
            return userserviceModel.remove(condition)
            .then((result) => {
                return resolve(result);
            })
            .catch((err) => {
                return reject(err);
            });
        });
    }

    findCount(condition){
        return new Promise((resolve,reject) => {
            return userserviceModel.count(condition)
            .then((result) => {
                return resolve(result);
            })
            .catch((err) => {
                return reject(err);
            })
        })
    }
    
    AllStudents(projection) {
        return new Promise((resolve, reject) => {
                return userserviceModel.findAll(projection)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }
}

exports = module.exports = new userService();