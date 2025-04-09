import './LotsElement.css'
import PropTypes from 'prop-types'

function LotsElement({ title, text, img }) {
    return (
        <li className="lots-element">
            <div className="lots-element__overlay" />
            <div
                className={`lots-element__container lots-element__container_${img}`}
            >
                <div className="lots-element__info">
                    <h3 className="lots-element__info-title">{title}</h3>
                    <p className="lots-element__info-text">{text}</p>
                </div>
            </div>
        </li>
    )
}

LotsElement.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default LotsElement
