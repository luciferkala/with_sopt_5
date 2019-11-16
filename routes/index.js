var express = require("express");
var router = express.Router();
const multerTestRouter = require("./multerTest");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/multerTest", multerTestRouter);
module.exports = router;
