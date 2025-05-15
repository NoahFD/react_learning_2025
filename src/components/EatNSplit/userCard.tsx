type user = {
  id: string;
  name: string;
  moneyOwe: number;
  selected: boolean;
};

type userCard = {
  user: user;
  userList: user[];
  setItemList: React.Dispatch<React.SetStateAction<user[]>>;
};

export const UserCard = ({ user, userList, setItemList }: userCard) => {
  const clickButton = () => {
    const updatedList = userList.map((u) => ({
      ...u,
      selected: u.id === user.id ? !u.selected : false, // toggle current, unselect others
    }));
    setItemList(updatedList);
  };
  return (
    <div className={"flex justify-between items-center gap-2"}>
      <img src={""} alt={"user profile"} />
      <div>
        <h3>{user.name}</h3>
        <p>
          {user.moneyOwe < 0
            ? `You owe ${user.name} ${Math.abs(user.moneyOwe)} sgd`
            : user.moneyOwe > 0
              ? `${user.name} owe you ${Math.abs(user.moneyOwe)} sgd`
              : `You and ${user.name} are even`}
        </p>
      </div>
      {user.selected ? (
        <button
          className={"bg-amber-800 text-xl p-2 rounded-2xl"}
          onClick={() => clickButton()}
        >
          Select
        </button>
      ) : (
        <button
          className={"bg-amber-800 text-xl p-2 rounded-2xl"}
          onClick={() => clickButton()}
        >
          Close
        </button>
      )}
    </div>
  );
};
