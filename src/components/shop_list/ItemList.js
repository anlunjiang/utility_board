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
              id={item.id}
              item={item.item}
              date={item.date}
              author={item.author}
              onDelete={props.onDeleteItem}
            />
          )
        )}
      </ul>
    </Card>
  );
};

export default ItemList;
