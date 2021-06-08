//Dependencies 
const app = require("./app");

//Configuration-this will configure this variable so that .env can be used by the server,
// but we wont be explicitly calling it 
require("dotenv").config();
const PORT = process.env.PORT

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})