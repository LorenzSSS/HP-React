import s from './Main.module.css'
import {Card} from '../Card/Card'
import {Container} from '../Container/Container'
import {data} from '../../data'


export const Main = ({search}) => {
    const filterData = data.filter (el => el.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <Container>
            <main className={s.Main}>
                {filterData.map((el) => (
                    <Card 
                        img={el.image}
                        name={el.name}
                        actor={el.actor}
                        gender={el.gender}
                        house={el.house}
                        wandCore={el.wand.core}
                        alive={el.alive? 'yes' : 'no'}
                    />
                ))}
            </main>
        </Container>
    )
}

export default Main;