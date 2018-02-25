var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ravi:kieran@ds239648.mlab.com:39648/mytasklist_kieran', ['tasks']);

//GET All Tasks - GET Request
router.get('/tasks', function(req, res, next){
   
    db.tasks.find(function(err,tasks){
       if(err){
           res.send(err);
       }
       res.json(tasks);
    });
});



// GET Single Task - GET Request
router.get('/task/:id', function(req, res, next){
   
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
       if(err){
           res.send(err);
       }
       res.json(task);
    });
});

// Save Task - POST Request
router.post('/task', function(req, res, next){
   
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });

    } else{
        db.tasks.save(function(err,tasks){
            if(err){
                res.send(err);
            }
            res.json(tasks);
         });
    }
});



// Delete Task - DELETE Request

router.delete('/task/:id', function(req, res, next){
   
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
       if(err){
           res.send(err);
       }
       res.json(task);
    });
});

// UPDATE Task - PUT Request

router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = task.title;
    }
if(!updTask){
    res.status(400);
    res.json({
        "error" : "Bad Data"
});

} else { 

    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {} , function(err,task){
       if(err){
           res.send(err);
       }
       res.json(task);
    });
}
});






module.exports = router;