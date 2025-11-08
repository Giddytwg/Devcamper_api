cross-env:  helps make our script to be OS agnostic
as windows script commmand is difffrent from IOs scripts    
instead of using cross-env, we can use windows script: 
NODE_ENV=development && nodemon server ---for dev mode
or
NODE_ENV=production && node server ---for prod mode


Mongoose:
An abstration for querying mongoDB

const mongoose = require mongoose

mongoose.connect(uri) //uri from atlas


libraries:
colors- for color formating of console logs

morgan: for logging messages in to the console

cross-env: used to env scripts OS agnostic

dotenv: used for for writing environment variables such as API keys, Auth tokens, Ports, database URI etc (NOTE .env file should be always be added to the git ignore file to prevent pushing into github repo)