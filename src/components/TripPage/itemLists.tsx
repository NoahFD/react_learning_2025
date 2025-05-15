import { SingleItem } from "./singleItem.tsx";

type Item = {
  id: string;
  name: string;
  quantity: number;
  status: string;
};

type Props = {
  itemList: Item[];
  setItemList: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ItemLists = ({ itemList, setItemList }: Props) => {
  console.log(itemList);
  return (
    <div className={"bg-amber-100 p-2 flex justify-center gap-5 col-span-2"}>
      {itemList.map((item) => (
        <SingleItem
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          quantity={item.quantity}
          itemList={itemList}
          setItemList={setItemList}
        />
      ))}
    </div>
  );
};

export default ItemLists;
