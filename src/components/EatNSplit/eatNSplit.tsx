import { useState } from "react";
import { ListCard } from "./listCard.tsx";
import { SplitForm } from "./splitForm.tsx";

const EatNSplit = () => {
  const userListDummy = [
    {
      id: "1",
      name: "Clark",
      moneyOwe: -7,
      selected: false,
    },
    {
      id: "2",
      name: "Sarah",
      moneyOwe: 20,
      selected: false,
    },
    {
      id: "3",
      name: "Anthony",
      moneyOwe: 0,
      selected: false,
    },
  ];
  const [userList, setUserList] = useState(userListDummy);
  return (
    <div className={"grid grid-cols-2 gap-4"}>
      <ListCard userList={userList} setItemList={setUserList} />
      <SplitForm userList={userList} setItemList={setUserList} />
    </div>
  );
};

export default EatNSplit;
