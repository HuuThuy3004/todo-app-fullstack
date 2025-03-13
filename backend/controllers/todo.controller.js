const TodoModel = require('../models/todo.model')

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find()
    res.send(todo);
}

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body
    TodoModel.create({ text }).then((data) => {
        console.log('-> Added todo successfully...')
        res.status(201).send(data)
    })
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body
    TodoModel.findByIdAndUpdate(_id, { text }, { new: true }).then((data) => {
        console.log('-> Updated todo successfully...')
        res.status(200).send(data)
    }).catch((err) => { console.log(err) })
}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body
    TodoModel.findByIdAndDelete(_id).then((data) => {
        console.log('-> Deleted todo successfully...')
        res.status(200).send(data)
    }).catch((err) => { console.log(err) })
}