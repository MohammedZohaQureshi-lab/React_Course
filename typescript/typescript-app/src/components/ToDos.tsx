import React from 'react'
import ToDo from '../models/todo'
import Lists from './Lists'

const ToDos: React.FC<{ items: ToDo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item, i) => <Lists key={`${item.id}_${i}`} textItem={item.text} />)}
        </ul>
    )
}

export default ToDos