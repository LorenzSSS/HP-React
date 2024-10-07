import s from './Input.module.css'

export function Input({value, onChange}) {
    return (
        <div className = {s.Input}>
            <p className = {s.name}>Name</p>
            <input
            className = {s.placeholder}
            placeholder = 'Placeholder'
            value = {value}
            onChange = {onChange} 
            />
            <div className = {s.rectangle}></div>
        </div>
    ) 
}

export default Input;