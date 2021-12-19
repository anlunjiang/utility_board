import ItemForm from "./ItemForm";

const AddItem = (props) => {
  // handlers
  const addItemDataHandler = (enteredItemData) => {
    const itemData = {
      id: Math.random().toString(),
      ...enteredItemData,
    }
    console.log(itemData);
  }
  return (
    <ItemForm onAddItemData={addItemDataHandler}/>
  )
}

export default AddItem;