import LinkTile from '../../components/linkTile/LinkTile';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './latestNews.module.css';

const LatestNews = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section__heading}>Najnowsze aktualności</h2>
            <div className={styles.section__news}>
                <LinkTile
                    id='123'
                    heading='Posprzatalismy plażę'
                    text='W ciągu ostatnich kilku dni nasza organizacja non-profit poświęciła się jednemu z naszych ulubionych zadań - sprzątaniu plaż. To była niesamowita przygoda i wielkie wyzwanie...'
                    image='1.jpg'
                    variant='news'
                    className={styles.section__tile}
                />
                <LinkTile
                    id='123'
                    heading='Posprzatalismy plażę'
                    text='W ciągu ostatnich kilku dni nasza organizacja non-profit poświęciła się jednemu z naszych ulubionych zadań - sprzątaniu plaż. To była niesamowita przygoda i wielkie wyzwanie...'
                    image='1.jpg'
                    variant='news'
                    className={styles.section__tile}
                />
                <Link className={styles.section__link} to='/aktualnosci'>
                    <AiOutlineRight className={styles.link__icon} />
                    <span className={styles.link__text}>Zobacz więcej</span>
                </Link>
            </div>
        </section>
    )
}

export default LatestNews
