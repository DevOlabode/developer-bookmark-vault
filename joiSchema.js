const Joi = require('joi');

module.exports.bookmarkSchema = Joi.object({
    title : Joi.string().required(),
    url : Joi.string().required(),
    category : Joi.string().required(),
    tags : Joi.string(),
    notes : Joi.string().allow(''), 
}).required();

module.exports.collectionSchema = Joi.object({
    name : Joi.string().required(),
    description : Joi.string().allow('')
}).required();
