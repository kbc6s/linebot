var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send("home")
})
router.get("/hi",function(req,res){
   console.log("有人打招呼了")
   res.render("a")
})
router.get("*",function(req,res){
   res.send("沒有這頁喔")
})
// router.post('/post', function (req, res) {
//     res.send('POST request to the homepage');
//   });

module.exports = router;