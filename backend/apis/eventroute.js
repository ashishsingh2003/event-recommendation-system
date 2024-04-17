const express=require('express');
const router=express.Router();
let Event=require('../models/Event');

router.post('/addevent',async (req,res)=>{

    let {img,event,date,seatleft}=req.body;
     await Event.create({img,event,date,seatleft});
     res.status(201).json({msg:"new quote successfully"});

})
router.get('/getevent',async (req,res)=>{
    let events=await Event.find();
    res.json(events);
})
router.get('/getevent/:id',async (req,res)=>{
    let {id}=req.params;
    let events=await Event.findById(id);
    res.json(events);
})
router.post('/delete/:id',async (req,res)=>{
    let {id}=req.params;
    await Event.findByIdAndDelete(id);
    res.json({msg:"deleted successfully"});
})
router.put('/edit/:id',async (req,res)=>{
    let {id}=req.params;
    let {img,event,date,seatleft}=req.body;
    await Event.findByIdAndUpdate(id,{img,event,date,seatleft});
    res.json({msg:"updated successfully"});
})
router.get('/searchevent/:searcheve',async (req,res)=>{
     let {searcheve}=req.params;
     
    console.log(searcheve);
    let search=await Event.find();
    if(searcheve)
    {
        search=search.filter(x=>x.event.toLowerCase().includes(searcheve));
    }
    console.log(search);
    res.json(search);
})
module.exports=router;