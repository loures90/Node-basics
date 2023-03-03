const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set("views", "src/views");

app.use((req, res, next) => {
    console.log(req.body)
    next()
})

app.get('/views/users', async (req, res) =>{
    const users = await UserModel.find()
    res.render("index", { users });
})
app.get('/users', async (req, res)=>{
    try {
       const users = await UserModel.find()
       res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const users = await UserModel.findById(id)
        res.status(201).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const users = await UserModel.findByIdAndUpdate(id, body, { new: true})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await UserModel.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
})
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

const port = 8080;

app.listen(port, () => console.log(`server is running on port ${port}`))