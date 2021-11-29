import { useContext } from "react";
import FavoritesContext from "../store/Favorite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
const MeetupItem = (props) => {
  const favoritesCtx =  useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
console.log("props",props);
  const toggleFavoritesStatusHandler = () => {
    console.log("props",props);
    if (itemIsFavorite) {
       favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.Description,
        image: props.Image,
        address: props.address,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
