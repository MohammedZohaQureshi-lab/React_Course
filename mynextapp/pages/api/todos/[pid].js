import todos from '../../todos.json'
export default function handler(req, res) {
    res.status(200).json(todos.find((todo) => todo.id == req.query.pid) ?? {})
}