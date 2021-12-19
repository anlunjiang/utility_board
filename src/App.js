import AddItem from "./components/shop_list/AddItem";
import ItemList from "./components/shop_list/ItemList";
import {useState} from "react";

/**
 * Root element to render all other tags
 * @returns {JSX.Element}
 */
const App = () => {
  const [itemList, setItemList] = useState([]);

  const addItemHandler = (itemName) => {
    setItemList(prevItemList => {
        return [
          ...prevItemList,
          itemName,
        ]
      }
    )
  }
  return (
    <div>
      <AddItem onAddItem={addItemHandler}/>
      <ItemList itemsList={itemList}/>
    </div>
  )
}

export default App;