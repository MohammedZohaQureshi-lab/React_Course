import classes from './InputElement.module.css'

const InputElement = props=> {
    return (
        <div className={classes.input} >
            <label htmlFor={props.input.id}
             >{props.label}</label>
            <input {...props.input} />
        </div>
    )
}

export default InputElement