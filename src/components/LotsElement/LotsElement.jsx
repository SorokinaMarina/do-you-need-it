import './LotsElement.css'
import PropTypes from 'prop-types'

function LotsElement({ title, text }) {
    return (
        <li className="lots-element">
            <h3 className="lots-element__title">{title}</h3>
            <p className="lots-element__text">{text}</p>
        </li>
    )
}

LotsElement.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LotsElement
