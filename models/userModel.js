'use strict';
const modelName = 'Student';

const _ = require('lodash');
const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    Name : {
        type : String
    },
    ID_Number:{
        type : String, 
    },
    Class:{
        type : String,
    },
    Branch : {
        type : String 
    },
}, {
    strict: true
});

mongoose.model(modelName, schema);

class customers {

    count(condition) {
        return mongoose.model(modelName).count(condition);
    }

    findAll(projection){
        return mongoose.model(modelName).find({},projection).exec();
    }

    find(condition, projection) {

        return mongoose.model(modelName).find(condition, projection).exec();
    }
    save(studentInfo){
        return mongoose.model(modelName).create(studentInfo);
    }

    update(condition,updateInfo){
        return mongoose.model(modelName).update(condition,updateInfo).exec();
    }

    remove(condition){
        return mongoose.model(modelName).remove(condition).exec();
    }
}

exports = module.exports = new customers();