const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello Workd from Express!!');
});

app.listen(port , () => {console.log('Server Listening on port 3000')});
