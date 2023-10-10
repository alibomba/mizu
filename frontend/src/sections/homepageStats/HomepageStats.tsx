

import styles from './homepageStats.module.css';

const HomepageStats = () => {
    return (
        <section style={{ backgroundImage: `url('${process.env.REACT_APP_BACKEND_URL}/storage/assets/blob-bg-stats.svg')` }} className={styles.stats}>

        </section>
    )
}

export default HomepageStats
