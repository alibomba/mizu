import { Link } from 'react-router-dom';

import styles from './linkTile.module.css';

interface Props{
    id: string;
    image: string;
    heading: string;
    text: string;
    variant: 'project' | 'news';
}

const LinkTile = ({id, image, heading, text, variant}: Props) => {
  return (
    <Link className={styles.tile} style={{backgroundImage: `url('${process.env.REACT_APP_BACKEND_URL}/storage/${variant === 'project' ? 'projects' : 'news'}/${image}')`}} to={variant === 'project' ? `/projekt/${id}` : `/aktualnosc/${id}`}>
        <h3 className={styles.tile__heading}>{heading}</h3>
        <p className={styles.tile__text}>{text.length > 300 ? `${text.slice(0,300)}...` : text}</p>
    </Link>    
  )
}

export default LinkTile
