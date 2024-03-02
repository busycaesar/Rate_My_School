const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const { connectMongoDB } = require("./Database");

connectMongoDB()
  .then(app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`)))
  .catch((error) => console.log(`Error while starting the server ${error}`));
