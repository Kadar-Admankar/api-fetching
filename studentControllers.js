import studentModel from "../models/Student.js";

class studentController {
    // create DOcument
    static  createDoc = async (req,res)=>{
        try {
            // const { name,age,fees } = req.body
            // const doc = new studentModel({
            //     name:name,   //here first name is the key stored in db, second name is value(vari/dynamic value)stored in db
            //     age:age,
            //     fees:fees
            // })
            const doc = new studentModel(req.body)  //this is same as above commented object - as req.body also gives object so no need to write
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error)
        }
    }
 // get All document
    static getAllDoc = async (req, res)=>{
        try {
            const result = await studentModel.find()
            res.send(result)
            res.send(`All Doc`)
        } catch (error) {
            console.log(error)
        }
    }
// get Single Doc
    static getSingleDocById = async (req,res)=>{
       const result = await studentModel.findById(req.params.id)
        res.send(result)
    }
// update Doc
    static updateDocById = async (req,res)=>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)//first pmetr shows the url with id and second pmtr with data
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
// Delete Doc
    static deleteDocById = async (req,res)=>{
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)  //when to delete its status code is 204 - means no content
        } catch (error) {
            console.log(error)
        }
    }
}

export default studentController;