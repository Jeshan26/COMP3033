const connect = require("connect");
const url = require("url");
const lab2Handler = require("./lab2handler/lab2");

const app = connect();

// Middleware function to parse the URL 

function parseUrl(req, res, next)
    {
    req.parsedUrl = url.parse(req.url, true);
    next();
    }


// Route-based Middleware
function routeHandler(req, res, next) {
    // Route handling logic
    if (req.parsedUrl.pathname === '/lab2') {
        // Forward to lab2Handler if the path matches
        lab2Handler(req,res,next);
    } else {
        // If the route doesn't match, sends error
        res.end( JSON.stringify({ error : "Only path allowed for this lab is /Lab2"}));
    }
}    

app.use(parseUrl);
app.use(routeHandler);
// Create and start the server 

app.listen(3000, () =>{ 
        console.log('Server running on port 3000');
    });