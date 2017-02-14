/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Psswords = require('machinepack-passwords')

module.exports = {

    attributes: {
        nombres: {
            type: 'string',
            minLength: 5,
            required: true
        },
        apellidos: {
            type: 'string',
            minLength: 5,
            required: true
        },
        correo: {
            type: 'string',
            email: true,
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            defaultsTo: '123456'
        }
    },
    beforeCreate: function (values, cb) {
        sails.log.info(values)
        Passwords.encryptPassword({
            password: values.password
        }).exec({
            error: function (err) {
                cb(err)
            },
            success: function (result) {
                values.password = result;
            }
        });
    }

};