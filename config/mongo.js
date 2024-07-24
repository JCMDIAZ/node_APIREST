const mongoose = require("mongoose");

/* lo que viene en el curso
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, (err, res) => {
        if(!err){
            console.log('**** CONEXION CORRECTA ****');
        } else {
            console.log('**** ERROR DE CONEXION ****');

        }
    });
};
*/

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( (res) => { console.log('**** CONEXION CORRECTA ****'); })
    .catch( (error) => { 
        console.log('**** ERROR DE CONEXION ****');
        console.log(error); 
    } );
};

module.exports = dbConnect

// mongodb+srv://jcmdiaz:<password>@cluster0.sqfw7i2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
