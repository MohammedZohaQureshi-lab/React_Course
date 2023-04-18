import React from 'react'

const Lists: React.FC<{ textItem: string }> = (props) => {
    return <li>{props.textItem}</li>;
}

export default Lists