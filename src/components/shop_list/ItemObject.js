import classes from "./ItemObject.module.css"
import Card from "../UI/Card";
import ItemDate from "./ItemDate";


const ItemObject = (props) => {
    console.log(props.children)
    return (
        <Card className={classes.item}>
            <ItemDate date={props.date}/>
            <div className={classes.item__description}>
                <h2>{props.item}</h2>
                <div className={classes["item__author"]}>{props.author}</div>
            </div>
        </Card>
    )
}

export default ItemObject;
