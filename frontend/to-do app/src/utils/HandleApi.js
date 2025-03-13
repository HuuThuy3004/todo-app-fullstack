import axios from 'axios';

const baseUrl = 'http://localhost:5000'

const getAllTodo = (setTodo) => {
    axios.get(`${baseUrl}`).then(({ data }) => {
        console.log('data --->', data);
        setTodo(data)
    })
}
const addTodo = (text, setText, setTodo) => {
    axios.post(`${baseUrl}/save`, { text }).then(({ data }) => {
        console.log('data created --->', data);
        setText(data)
        getAllTodo(setTodo)
    }).catch((err) => console.log(err))
}
const updateTodo = (todoId, text, setText, setTodo, setIsUpdate) => {
    axios.put(`${baseUrl}/update`, { _id: todoId, text }).then(({ data }) => {
        console.log('data updated --->', data);
        setText('')
        setIsUpdate(false)
        getAllTodo(setTodo)
    }).catch((err) => console.log(err))
}

const deleteTodo = (_id, setTodo) => {
    axios.post(`${baseUrl}/delete`, { _id }).then(( data ) => {
        console.log('data deleted --->', data);
        getAllTodo(setTodo)
    }).catch((err) => console.log(err))
}

export { getAllTodo, addTodo, updateTodo, deleteTodo }