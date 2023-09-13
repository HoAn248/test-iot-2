var IMG = require('../models/upload')


const uploadController = {
    getUpload: async (req, res)=>{
       try{
        const upload = await IMG.find()
        res.status(200).json(upload);
       }catch(err){
        res.status(500).json({Message: err.message});

       }
    },
    createUpload: async (req, res)=>{
        try{
         const upload = new IMG(req.body)
         const saveupload = await upload.save();
         res.status(200).json(saveupload);
        }catch(err){
            res.status(500).json({Message: err.message});

        }
     },
}

module.exports = uploadController


// exports.getUpload = ((req, res) => {
//     IMG.find({})
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })
// })


// exports.postUpload = ((req, res) => {
//     IMG.create(req.body)
//     .then(()=>{
//         res.sendStatus(200)
//     })
//     .catch(()=>{
//         res.sendStatus(403)
//     })
    
// })