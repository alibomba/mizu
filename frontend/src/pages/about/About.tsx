

import styles from './about.module.css';

const About = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.section__content}>
                    <h2 className={styles.section__heading}>Nasz cel</h2>
                    <p className={styles.section__text}>Nasz główny cel jest prosty, ale głęboko zakorzeniony w naszej misji: chcemy chronić i zachować nasze środowisko dla teraźniejszych i przyszłych pokoleń. Dążymy do stworzenia zrównoważonej przyszłości, w której ludzie i natura współistnieją harmonijnie.</p>
                </div>
                <img className={styles.section__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/o-nas-nasz-cel.jpg`} alt="grupa młodych ludzi" />
            </section>
            <section className={styles.section}>
                <img className={styles.section__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/o-nas-nasze-wartosci.jpg`} alt="biurko z laptopem i kalendarzem" />
                <div className={styles.section__content}>
                    <h2 className={styles.section__heading}>Nasze wartości</h2>
                    <p className={styles.section__text}>Naszą organizację kierują fundamentalne wartości: poszanowanie przyrody, zrównoważony rozwój, edukacja ekologiczna i współpraca społeczna. Te wartości stanowią fundament naszych działań i inspirują naszą misję ochrony środowiska.</p>
                </div>
            </section>
            <section className={styles.team}>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
                <article className={styles.team__person}>
                    <img className={styles.person__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/assets/team/anna-kowalska.jpg`} alt="Anna Kowalska" />
                    <p className={styles.person__name}>Anna Kowalska</p>
                    <p className={styles.person__role}>Ekspert ds. Edukacji Ekologicznej</p>
                </article>
            </section>
        </main>
    )
}

export default About
