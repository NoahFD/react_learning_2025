import { UserCard } from "./userCard.tsx";

type user = {
  id: string;
  name: string;
  moneyOwe: number;
  selected: boolean;
};

type userList = {
  userList: user[];
  setItemList: React.Dispatch<React.SetStateAction<user[]>>;
};

export const ListCard = ({ userList, setItemList }: userList) => {
  return (
    <div>
      {userList.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          userList={userList}
          setItemList={setItemList}
        />
      ))}
    </div>
  );
};
