

function lab2handler(req,res,next){
    validMethods = ["add","subtract", "multiply", "divide"];
   const {method,x,y} = req.parsedUrl.query;

   // Checks if the method is not "add", "subtract","divide" and multiply and throws error
   if(!validMethods.includes(method)){
    res.end(JSON.stringify({ error: "Missing required parameters: method, x, and y" }));
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
   else if(method === "multiply"){
    result = numX * numY;
   }
   else {
    result = numX / numY;
   }


   res.end( JSON.stringify({x : numX ,y: numY , operation : method , result})); // returns the json object

};




module.exports = lab2handler;