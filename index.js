const express=require('express');
const users=require('./MOCK_DATA.json');

const app=express();
const port=8083;

//router
app.get('/',(req,res)=>{
   return res.json(users);
})
//find all data
app.get('/:id',(req,res)=>{
    const id=req.params.id;
    const user=users.find((user)=>user.id==id);
    return res.json(user);
})


//listing
app.listen(port,()=>{
    console.log(`your application is running at ${port}`);
})