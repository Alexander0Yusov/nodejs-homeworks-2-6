const Joi = require("joi");
const { emailRegexp, subscriptionList } = require("./defaults");

const userRegisterLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userPatchSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

module.exports = {
  userRegisterLoginSchema,
  userPatchSchema,
};
