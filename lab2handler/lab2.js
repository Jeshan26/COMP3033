

function lab2handler(req,res,next){
    validMethods = ["add","subtract", "multiply", "divide"];
   const {method,x,y} = req.parsedUrl.query;
   if(!validMethods.includes(method)){
        res.statusCode = 400; // Bad Request
        res.end("Invalid method! Only 'add' , 'subtract', 'Divide' and multiply are allowed.");
        return;
   }

   const numX = parseFloat(x);
   const numY = parseFloat(y);
   let result ; 

   if(method === "add"){
     result = numX + numY;
   }
   else if(method === "subtract"){
    result = numX - numY;
   }
   else if(method === "multipy"){
    result = numX * numY;
   }
   else {
    result = numX / numY;
   }


   res.end( JSON.stringify({x : numX ,y: numY , operation : method , result}));

};




module.exports = lab2handler;