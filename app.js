const express = require('express');

const UserController = require('./lib/users/user-controller');
const CoworkingController = require('./lib/coworking/coworking-controller');



const app = express();
const port = 3000;

app.use(express.json())

app.get('/users', UserController.getUsers);
app.post('/users', UserController.createUser);
app.put('/users/:id', UserController.updateUser);
app.delete('/users/:id', UserController.deleteUser);

app.get('/coworking', CoworkingController.getCoworking);
app.post('/coworking', CoworkingController.createCoworking);
app.put('/coworking/:id', CoworkingController.updateCoworking);
app.delete('/coworking/:id', CoworkingController.deleteCoworking);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});