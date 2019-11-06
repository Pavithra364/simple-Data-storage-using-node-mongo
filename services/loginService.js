'use strict';
const LoginServiceModel = require('../models/loginModel');

class LoginService {

      /** Get transactions
     * @param condition
     * @return Promise
     * */
    userCheck(condition) {
        return new Promise((resolve, reject) => {
                return LoginServiceModel.find(condition)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    insertUsers(userInfo){
        return new Promise((resolve, reject) => {
            return LoginServiceModel.save(userInfo)
            .then((result) => {
                return resolve(result);
            })
            .catch((err) => {
                return reject(err);
            });
        });
    }
}

exports = module.exports = new LoginService();