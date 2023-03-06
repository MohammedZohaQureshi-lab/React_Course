import todos from '../../todos.json'
export default function handler(req, res) {
  res.status(200).json(todos)
}