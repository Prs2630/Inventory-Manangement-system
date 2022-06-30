module.exports=fn=>{
    
    return (req,res,next)=>
    // fn(req,res,next).catch((err)=>next(err))
    fn(req,res,next).catch(next)//it will return promise so we can use catch
}