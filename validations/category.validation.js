const joi =require("joi")

/** create user */
const createcategory = {
    body: joi.object().keys({
      category_name: joi.string().required().trim(),
      category_dec: joi.string().required().trim(),
      is_active: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createcategory
  };