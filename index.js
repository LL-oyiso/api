// declare variable for app which represents actuall api we are building 
const app = require('express')();
const PORT = 8080;

// listen on specific port
app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)
