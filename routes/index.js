var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const path = require('path')
const mergeFunc =require('./merge')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/merge',  upload.array('pdfs', 2),async function (req, res, next) {

  let d=await mergeFunc(path.join("../pdfmerger/public/uploads/",req.files[0].filename),path.join("../pdfmerger/public/uploads/",req.files[1].filename))
  // res.send(req.files)
  res.sendFile(path.join(__dirname, `../public/${d}.pdf`));
  // res.redirect("http://localhost:3000/pdfmerger/public/merged.pdf")
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
module.exports = router;
