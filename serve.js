const express = require('espress');

const app = express();
const PORT = process.env.port || 3001;

app.listen(PORT, () => {
  console.log('server started!');
})