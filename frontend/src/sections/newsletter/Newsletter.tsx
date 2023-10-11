

import styles from './newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section__heading}>Śledź naszą działalność</h2>
            <p className={styles.section__subheading}>Otrzymuj powiadomienia o naszych projektach i kampaniach</p>
            <form className={styles.section__form}>
                <input type="email" className={styles.section__input} placeholder='Adres e-mail' aria-label='Adres e-mail' />
                <button className={styles.section__button}>Wyślij</button>
            </form>
        </section>
    )
}

export default Newsletter
