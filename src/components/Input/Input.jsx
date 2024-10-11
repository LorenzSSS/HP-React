import {Container} from '../Container/Container';
import s from './Input.module.css'

export function Input({value, onChange}) {
    return (
        <Container>
            <div className = {s.Input}>
            <label name='Name'className = {s.nameLabel}>Name</label>
            <input id='Name'
            className = {s.nameInput}
            placeholder = 'Hermione'
            value = {value}
            onChange = {onChange} 
            />
            </div>
        </Container>
    )
}

export default Input;