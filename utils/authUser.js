function authUser(req,res,next) {
    const userId = req.body.userId;
    if(!userId){
        res.status(401);
        return res.json({success:false,message:"Unauthorized user"});
    }
    next()
}

module.exports = authUser;