const express=require("express");

const User=require("../model/usermodel");

const router=express.Router();

router.get("/:id",async(req,res)=>{
    const {id}= req.params;
    try{
      const response=await User.findById(({_id:id}));
      res.status(200).json(response);

    }catch(error){
         console.log(error);
         res.send(500).json({error:error.message});
    }
});
router.get("/",async(req,res)=>{
    try{
    const showall= await User.find();
    res.status(200).json(showall);
    }catch(error){
       console.log(error);
       res.send(500).json({error:error.message});
    }
  
});

router.delete("/:id",async(req,res)=>{
      const {id}=req.params;
      try{
        const deluser=await User.findByIdAndDelete(({_id:id}));
        res.status(200).json(deluser);

      }catch(error){
        console.log(error);
        res.send(500).json({error:error.message});
      }
});


router.post("/",async(req,res)=>{
    const{topic,data}=req.body;

    try{
        const userAdd= await User.create({
            topic:topic,
            data:data,
        });
        res.status(201).json(userAdd);

    }catch(error){
        console.log(error);
        res.status(400).json({error:error.meassage});

    }
});


router.patch("/:id",async(req,res)=>{
    const {id}=req.params;
    //const[topic,data]=req.body;
    try{
        const update=await User.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.status(200).json(update);
    }catch(error){
        console.log(error);
        res.send(500).json({error:error.message});
    }

});
module.exports=router;