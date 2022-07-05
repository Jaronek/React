import styles from './Card.module.scss';
import ToggleButton from '../ToggleButton/ToggleButton';

const Card = props => {
    return (
            <li className={styles.card}>{props.title}
                <ToggleButton isFavorite={props.isFavorite} id={props.id}/>
            </li>
        );
};

export default Card;