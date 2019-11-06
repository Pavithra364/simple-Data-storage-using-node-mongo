'use strict';
const modelName = 'login';

const _ = require('lodash');
const mongoose = require('mongoose');

let schema = new mongoose.Schema({
   
    Email : {
        type : String
    },
    Password :{
        type : String
    }
}, {
    strict: true
});

mongoose.model(modelName, schema);

class customers {

    find(condition) {

        return mongoose.model(modelName).find(condition).exec();
    }
    save(userInfo){
        return mongoose.model(modelName).create(userInfo).exec();
    }
}

exports = module.exports = new customers();