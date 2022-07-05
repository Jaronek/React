import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));
    console.log(favoriteCards.map(favoriteCard => favoriteCard))

    return(
        <div>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.favorite}>
                {favoriteCards.map(favoriteCard => <Card key={favoriteCard.id} title={favoriteCard.title}/>)}
            </ul>
        </div>
    );
}
export default Favorite;