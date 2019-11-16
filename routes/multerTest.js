var express = require("express");
var router = express.Router();
const upload = require("../config/multer");
/* GET users listing. */
router.post("/single", upload.single("image"), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, body: req.body });
});

router.post("/array", upload.array("photos", 5), function(req, res, next) {
  console.log(req.files);
  console.log(req.body);
  res.send({ file: req.files, body: req.body });
});

const cpUpload = upload.fields([
  { name: "thumbnail", maxCount: 2 }, //maxCount가 없다면 넣는 그대로 다 받을 수 있음
  { name: "images", maxCount: 5 }
]);
router.post("/fields", cpUpload, function(req, res, next) {
  console.log(req.files);
  console.log(req.body);
  res.send({ file: req.files, body: req.body });
});

module.exports = router;
