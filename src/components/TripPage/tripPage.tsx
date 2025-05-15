import { Title } from "./title.tsx";
import ItenaryForm from "./itenaryForm.tsx";
import ItemLists from "./itemLists.tsx";
import { useState } from "react";
import Footer from "./footer.tsx";

export const TripPage = () => {
  // const dummyID = [
  //   { id: "1", name: "toothbrush", quantity: 2 },
  //   { id: "2", name: "passport", quantity: 2 },
  // ];
  const [itemList, setItemList] = useState([
    { id: "1", name: "toothbrush", quantity: 2, status: "new" },
    { id: "2", name: "passport", quantity: 2, status: "done" },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4">
      <Title />
      <ItenaryForm setItemList={setItemList} itemList={itemList} />
      <ItemLists itemList={itemList} setItemList={setItemList} />
      <Footer itemList={itemList} />
    </div>
  );
};
