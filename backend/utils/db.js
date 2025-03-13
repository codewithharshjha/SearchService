const mongoose =require( "mongoose");

 exports.connectToDabase=()=>{
    mongoose.connect(`mongodb+srv://hjha3987:${process.env.MONGODBPASSWORD}@cluster0r.ni6fr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0r`)
    .then(() => {
        console.log('MongoDB is successfully connected');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}
