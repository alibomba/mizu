import LinkTile from '../../components/linkTile/LinkTile';

import styles from './nearProjects.module.css';

const NearProjects = () => {
  return (
    <section className={styles.section}>
        <h2 className={styles.section__heading}>Najbliższe projekty</h2>
        <div className={styles.section__grid}>
            <LinkTile
                id='123'
                heading='Sadzenie drzew'
                text='Nasza organizacja non-profit zaprasza do udziału w kampanii sadzenia drzew, która ma na celu zwiększenie zielonych obszarów i poprawę stanu naszego środowiska. Wspólnie z lokalnymi społecznościami i wolontariuszami sadzimy tysiące drzew w parkach, lasach i terenach miejskich.'
                image='1.jpg'
                variant='project'
            />
        </div>
    </section>
  )
}

export default NearProjects
