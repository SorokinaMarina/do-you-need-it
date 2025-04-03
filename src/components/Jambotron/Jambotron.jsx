import './Jambotron.css'

function Jambotron() {
    return (
        <section className="jambotron">
            <div className="jambotron__overlay" />
            <div className="jambotron__container">
                <h1 className="jambotron__title">
                    <span className="jambotron__title-element">
                        он
                        <span className="jambotron__title-element-space">
                            о
                        </span>
                    </span>
                    <span className="jambotron__title-element">
                        теб
                        <span className="jambotron__title-element-space">
                            е
                        </span>
                    </span>
                    <span className="jambotron__title-element">
                        н
                        <span className="jambotron__title-element-space">
                            адо
                        </span>
                    </span>
                </h1>
                <div className="jambotron__subline">
                    <p className="jambotron__text">
                        Аукцион вещей, вкоторые никто не верил
                    </p>
                    <button
                        className="jambotron__button"
                        type="button"
                        aria-label="Кнопка сделать ставку"
                    >
                        Сделать ставку
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Jambotron
