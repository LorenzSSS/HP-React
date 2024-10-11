import s from './Card.module.css'

export const Card = ({img, name, actor, gender, house, wandCore, alive}) => {return (
    <article className={s.Card}>
        <img className={s.image} src={img} alt="" />
        <div className={s.content}>
            <p className={s.name}>{name}</p>
            <p className={s.info}>Actor: {actor}</p>
            <p className={s.info}>Gender: {gender}</p>
            <p className={s.info}>House: {house}</p>
            <p className={s.info}>Wand core: {wandCore}</p>
            <p className={s.info}>Alive: {alive}</p>
        </div>
    </article>
)}