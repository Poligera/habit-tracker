const app = require('./server');
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express just departed from port ${port}!`));
