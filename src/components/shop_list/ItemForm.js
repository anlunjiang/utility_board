import Card from "../UI/Card";
import classes from "./ItemForm.module.css"
import {useState} from "react";
import Button from "./Button";

const ItemForm = (props) => {

  // states
  const [enteredItem, setEnteredItem] = useState("");

  // handlers
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };
  const addItemHandler = (event) => {
    event.preventDefault();
    const itemData = {
      item: enteredItem,
      date: new Date(Date.now()),
    };
    props.onAddItemData(itemData)
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addItemHandler}>
        <label>Item</label>
        <input type="text" value={enteredItem} onChange={itemChangeHandler}/>
        <Button type="submit">Add Item</Button>
      </form>
    </Card>

  )
}

export default ItemForm;