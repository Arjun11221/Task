const adminController = (req,res)=>{
    try {
     res.send("Admin");   
    } catch (error) {
       console.log(error.message); 
    }
}

module.exports = {adminController};