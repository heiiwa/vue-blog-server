var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/user.controller");
router.get('/',userCtrl.getall);
router.delete('/:id',userCtrl.remove);
router.put('/data/:id',userCtrl.update);
router.post('/data',userCtrl.create);// 执行控制器中的 create 方法
router.post('/removes',userCtrl.removes);
router.get('/list/:page/:limit',userCtrl.list);
module.exports = router;
