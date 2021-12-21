import Card from "../UI/Card";
import classes from "./AddItem.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddItem = (props) => {
  // states`
  const [enteredItem, setEnteredItem] = useState("");
  const [author, setAuthor] = useState("Anlun");
  const [error, setError] = useState();

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
      setError({
        title: "Invalid Input",
        message: "Please enter a non-empty value",
      });
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
    console.log(itemData);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addItemHandler}>
          <label htmlFor="item_name">Item</label>
          <input
            id="item_name"
            type="text"
            value={enteredItem}
            onChange={itemChangeHandler}
          />
          <div className={classes["author-filter"]}>
            <div className={classes["author-filter__control"]}>
              <label htmlFor="item_author">Author</label>
              <select
                id="item_author"
                value={author}
                onChange={setAuthorHandler}
              >
                <option value="Anlun">Anlun</option>
                <option value="Marlene">Marlene</option>
              </select>
            </div>
          </div>
          <Button type="submit" onClick={errorHandler}>
            Add Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddItem;
