import Card from "../UI/Card";
import classes from "./ItemList.module.css";
import ItemObject from "./ItemObject";


const ItemList = (props) => {
  return (
    <Card className={(classes.items)}>
      <ul>
        {props.itemsList.map(
          item => (
            <ItemObject
              item={item.item}
              date={item.date}
              author={item.author}
            />
          )
        )}
      </ul>
    </Card>
  );
};

export default ItemList;
