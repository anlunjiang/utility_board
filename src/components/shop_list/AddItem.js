import Card from "../UI/Card";
import classes from "./AddItem.module.css"
import {useState} from "react";
import Button from "../UI/Button";

const AddItem = (props) => {

  // states
  const [enteredItem, setEnteredItem] = useState("");
  const [author, setAuthor] = useState("Anlun")

  // handlers
  const setAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };
  const addItemHandler = (event) => {
    event.preventDefault(); // must be present - or will refresh once returned
    if (enteredItem.trim().length === 0) {
      return;
    }
    event.preventDefault();
    const itemData = {
      id: Math.random().toString(),
      item: enteredItem,
      date: new Date(Date.now()),
      author: author,
    };
    props.onAddItem(itemData);
    setEnteredItem("");
    console.log(itemData)
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addItemHandler}>
        <label htmlFor="item_name">Item</label>
        <input id="item_name" type="text" value={enteredItem} onChange={itemChangeHandler}/>
        <div className={classes["author-filter"]}>
          <div className={classes["author-filter__control"]}>
            <label htmlFor="item_author">Author</label>
            <select id="item_author" value={author} onChange={setAuthorHandler}>
              <option value="Anlun">Anlun</option>
              <option value="Marlene">Marlene</option>
            </select>
          </div>

        </div>


        <Button type="submit">Add Item</Button>
      </form>
    </Card>

  )
}

export default AddItem;