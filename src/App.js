import AddItem from "./components/shop_list/AddItem";
import ItemList from "./components/shop_list/ItemList";
import {useState} from "react";

/**
 * Root element to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
  // states
  const [itemList, setItemList] = useState([]);
  // handlers
  const addItemHandler = (itemName) => {
    setItemList(prevItemList => {
        return [
          ...prevItemList,
          itemName,
        ];
      }
    );
  };
  const deleteItemHandler = (itemId) => {
    setItemList(prevItemList => {
      return prevItemList.filter(item => item.id !== itemId)
    })
  }

  let content = (
    <p style={{ textAlign: "center" }}>No Items found. Did we buy everything?!</p>
  );

  if (itemList.length > 0) {
    content = <ItemList itemsList={itemList} onDeleteItem={deleteItemHandler}/>
  }

  return (
    <div>
      <AddItem onAddItem={addItemHandler}/>
      <section id="items">
        {content}
      </section>
    </div>
  )
}

export default App;