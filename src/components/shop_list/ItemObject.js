import classes from "./ItemObject.module.css"
import Card from "../UI/Card";
import ItemDate from "./ItemDate";


const ItemObject = (props) => {
    // handlers
    const deleteItemHandler = () => {
      props.onDelete(props.id)
    }
    return (
        <Card className={classes.item}>
            <ItemDate date={props.date}/>
            <div className={classes.item__description}>
                <h2>{props.item}</h2>
                <div className={classes["item__author"]}>{props.author}</div>
                <button
                  className={classes["del_button"]}
                  type="button"
                  onClick={deleteItemHandler}
                >Done</button>
            </div>
        </Card>
    )
}

export default ItemObject;
