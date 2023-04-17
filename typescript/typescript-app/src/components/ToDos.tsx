import React from 'react'
import ToDo from '../models/todo'

const ToDos: React.FC<{ items: ToDo[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    )
}

export default ToDos