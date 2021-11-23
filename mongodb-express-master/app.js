const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url="mongodb+srv://sahil1309:$Sahil189209111@cluster0.5uwap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const MYSchema=require('./studentSchema')
mongoose.connect(url).then(()=>console.log("CONNECTED"))
app.use(express.json())
app.post('/add-new-post',async(req,res)=>{

   const myStudent_name=req.body.Student_name;
   const myregistration_number=req.body.registration_number;
   const myMarks_Outof50=req.body.Marks_Outof50;

   try{
          const NewStudent=new MYSchema(
            {
                Student_name:myStudent_name,
                registration_number:myregistration_number,
                Marks_Outof50:myMarks_Outof50
            }
          )
          const savedStudent= await NewStudent.save()
          res.json(
              {'message':'Student is saved','data':savedStudent}
            )
   }catch(err){
          res.json(err);
   }

})
app.use("/",(req,res)=>{

    res.json(
        {"message":"HI I'M SAHIL"}
    )
})
app.listen(3600,()=>console.log("EXP Server Started"))
