const express = require('express')
const router = express.Router();
const Invention = require('./schema.js')
const mongoose=require('mongoose')
const Joi = require('joi'); 
const User = require('./UserSchema.jsx')

const schema = Joi.object({
    Invention: Joi.string().required(),
    Founder: Joi.string().required(),
    Founded: Joi.string().required(),
    Description: Joi.string().required(), 
  });

  const validateRegister = Joi.object({
    FirstName: Joi.string().required(),
    LastName: Joi.string(),
    Email: Joi.string().required(),
    password: Joi.string().required(),
})

  const validation = (input) => {
    const { error } = schema.validate(input);
    if (error) {
        return false;
    } else {
        return true;
    }
};

const Registervalidation = (input) => {
    const { error } = validateRegister.validate(input);
    if (error) {
        return false;
    } else {
        return true;
    }
};

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("Mongo Connected");
    }
    catch(err){
        console.log("Connection Failed:", err);
    }
}

router.get('/',async (req , res) => {
    try{
        const Inventions = await Invention.find()
        res.json(Inventions)
    }catch (err){
        res.json({error : "Error occured 1"})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        const InventionFound = await Invention.findById(req.params.id)
        res.json(InventionFound)
    }
    catch(err){
        res.json({error : "Error occurred 2"})
    }
})

router.post
('/add-Invention', async (req , res)=>{ 

    if(!validation(req.body)){
        return res.status(400).json({"Error":"Invalid data input"})
    }
    const newInvention = new Invention({
        Invention:req.body.Invention,
        Founder : req.body.Founder,
        Founded : req.body.Founded,
        Description : req.body.Description,
        Image:req.body.Image
    })
    try{
        const saveInvention = await newInvention.save()
        res.json(saveInvention)
    }
    catch (err){
        res.json({error : err})
    }
})

router.patch('/:id' , async (req,res)=>{
    try{
        const InventionFound = await Invention.findByIdAndUpdate(req.params.id, req.body , {new : true});
        if(!InventionFound){
            return res.status(404).json({error : "Invention not found "})
        }
        res.json(InventionFound);
    }catch (err){
        res.status(500).send('Error: '+ err)
    }
})
router.put('/:id', async (req, res) => {
    try {
        const updatedInvention = await Invention.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInvention) {
            return res.status(404).json({ error: "Invention not found " });
        }
        res.json(updatedInvention);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


router.delete('/:id' , async (req , res)=>{
    try{
        const InventionFound = await Invention.findByIdAndDelete(req.params.id);
        if(!InventionFound){
            return res.status(404).json({error : "Invention not found "})
        }
        res.json("Invention deleted");
    }catch (err){
        res.status(500).send('Error:')
    }
})

router.post('/register', async (req, res) => {
    // const findUser = await User.findOne({ Email: req.body.Email })
    // if (findUser) {
    //     return res.status(409).json({ Error: "User already exists" })
    // }
    // if (!Registervalidation(req.body, validateRegister)) {
    //     return res.status(400).json({ "Error": "Data validation failed" })
    // }
    const newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        password: req.body.password,
    })
    try {
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.status(201).json({ savedUser })
    }
    catch (err) {
        
        console.log(err)
        res.status(500).json({ error: "An error occurred" })
    }
})

router.post('/login', async (req, res) => {
    const findUser = await User.findOne({ Email: req.body.Email })
    console.log(req.body)
    
    if (findUser) {
        return res.json({ Message: "Login Successful!", Name: findUser.Email })
    }
    else {
        return res.status(405).json({ Error: "Login Failed!" })
    }
})

router.post('/logout', async (req, res) => {
    return res.json({ Message: "Logout successfull!" })
})

router.get('/', async (req, res) => {
    try {
        const Inventions = await Invention.find()
        res.json(Inventions)
    }
    catch (err) {
        res.status(500).json({ error: "An error occurred" })
    }
})

connectDB()

module.exports = router