const mongoose=require('mongoose');
const User=require('../models/user.model')

//新建用户
exports.create=function(req,res,next){
    const user=new User(req.body);
    user.save().then(data=>{
         res.json(data)
     })
};
//更新
exports.update=function(req,res,next){
    const id=req.params.id;
    const user=req.body;
    delete user._id;
    User.update({id:_id},user,function(err,data){
        console.log(data);
        // res.send({data});
    })


    // var user= new User(req.body);
    // var id=req.params.id;
    // User.findByIdAndUpdate(id,{$set: req.body},{new:true}).then((user)=>{
    //     res.send({user});
        
    // })
};
// exports.update=function(req,res,next){
//     var id=req.params.id;
//     User.findByIdAndUpdate(id,{$set:req.body},function(err,doc){
//         res.json({"message":"update ok"});
//     })
// };

exports.list=function(req,res,next){
    var page=(req.params.page) ? req.params.page: 1;
    var limit=(req.params.limit) ? req.params.limit: 5;
    console.log("服务器",req.params);
    var queryCondition={};
    if(req.params.name&&req.params.name.trim().length>0){
        name=req.params.name;
        queryCondition={
            "name":new RegExp(name,"1")
        }
    }
    User.paginate(queryCondition,{page:page,limit:limit},function(err,result){
        console.log(result);
        res.json(result);
    }) 
}

exports.getall=function(req,res,next){
   User.find().then(data=>{
    res.json(data);
   })
};
exports.remove=function(req,res,next){
    var id=req.params.id;
    User.findByIdAndRemove(id,function(err,doc){
        res.json({"message":"delete ok"})
    })
};
exports.removes=function(req,res,next){
    console.log(req.body)
    var ids=req.body.ids;
    if(ids.length>0){
        User.remove({_id:{$in:ids}}).then(deleteUsers=>{
            res.json({"message":"delete ok"});
        })
    }else{
        res.status(404).send({"message":"404"});
    }
};
