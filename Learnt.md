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

Model and schemas


Error: Bootcamp validation failed: address: Please add an address, description: Please add a description, name: Please add a name
    at ValidationError.inspect (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\error\validation.js:52:26)
    at formatValue (node:internal/util/inspect:850:19)
    at inspect (node:internal/util/inspect:387:10)
    at formatWithOptionsInternal (node:internal/util/inspect:2366:40)
    at formatWithOptions (node:internal/util/inspect:2228:10)
    at console.value (node:internal/console/constructor:336:14)
    at console.log (node:internal/console/constructor:384:61)
    at errorHandler (C:\Users\Giddy\Desktop\DevCamperAPI\middlewares\error.js:8:13)
    at Layer.handleError (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\router\lib\layer.js:116:17)
    at trimPrefix (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\router\index.js:340:13) {
  errors: {
    address: ValidatorError: Please add an address
        at validate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1417:13)      
        at SchemaType.doValidate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1401:7)
        at C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\document.js:3115:18
        at process.processTicksAndRejections (node:internal/process/task_queues:85:11) {
      properties: [Object],
      kind: 'required',
      path: 'address',
      value: undefined,
      reason: undefined,
      [Symbol(mongoose#validatorError)]: true
    },
    description: ValidatorError: Please add a description
        at validate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1417:13)      
        at SchemaType.doValidate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1401:7)
        at C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\document.js:3115:18
        at process.processTicksAndRejections (node:internal/process/task_queues:85:11) {
      properties: [Object],
      kind: 'required',
      path: 'description',
      value: undefined,
      reason: undefined,
      [Symbol(mongoose#validatorError)]: true
    },
    name: ValidatorError: Please add a name
        at validate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1417:13)      
        at SchemaType.doValidate (C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\schemaType.js:1401:7)
        at C:\Users\Giddy\Desktop\DevCamperAPI\node_modules\mongoose\lib\document.js:3115:18
        at process.processTicksAndRejections (node:internal/process/task_queues:85:11) {
      properties: [Object],
      kind: 'required',
      path: 'name',
      value: undefined,
      reason: undefined,
      [Symbol(mongoose#validatorError)]: true
    }
  },
  _message: 'Bootcamp validation failed'
}