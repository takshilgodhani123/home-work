const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

module.exports = {
  createcategory,
};