const dbConn = require('../database/DB');

// this is getting users in async await way 
exports.findAll= async function(req,res) {
    try {
        await dbConn.query('SELECT * FROM Admin_User', (error, results, fields)=>{
            res.send(results);
          });
  
    }catch(error){
        console.log("error happend: ", error);

    }
}

exports.findOne =  async (req,res)=>{
    try{
        await dbConn.query('Select * from Admin_User where id= ?', 
        req.params.id, (error, results, fields)=>{
            res.send(results);
        });

    }catch(error){
        res.send({error})
    }
}



//this is getting users in Promise way 

