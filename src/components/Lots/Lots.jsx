import './Lots.css'
import LotsElement from '../LotsElement/LotsElement'
import { lotsElementData } from '../../utils/constants'

function Lots() {
    return (
        <section className="lots">
            <div className="lots__container">
                <h2 className="lots__title">Лоты</h2>
                <ul className="lots__list">
                    {lotsElementData.map((item) => (
                        <LotsElement
                            key={item.title}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Lots
