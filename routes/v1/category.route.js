const express = require("express");
// const { userValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  // validate(categoryValidation.createcategory),
  categoryController.createcategory
);


/** Get category list */
// router.get(
//   "/list",
//   // validate(categoryValidation.getcategoryList),
//   categoryController.getcategoryList
// );

module.exports = router;