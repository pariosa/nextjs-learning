
import { bigData } from './all';

export default (req,res) =>{
    const { id }  = req.query;
    //res.status(200).json(bigData)
    console.log(req.query)
    res.status(200).json(bigData.filter(e=>{return e.id == id})[0])
}