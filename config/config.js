const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url")
}).unknown();


const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
 
// console.log(envVars);

  module.exports = {
    port: envVars.PORT,
    mongodb: {
      url:envVars.MONGODB_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }
};