import { useState } from "react";

type user = {
  id: string;
  name: string;
  moneyOwe: number;
  selected: boolean;
};

type userForm = {
  userList: user[];
  setItemList: React.Dispatch<React.SetStateAction<user[]>>;
};

export const SplitForm = ({ userList, setItemList }: userForm) => {
  const selectedUser = userList.find((user) => user.selected) ?? null;
  const [yourExpense, setYourExpense] = useState(0);
  const [bill, setBill] = useState(0);
  const [payer, setPayer] = useState(0);
  return (
    <>
      {selectedUser && (
        <form
          className={"grid grid-cols-2 gap-1.5 p-5 bg-amber-300"}
          onSubmit={(e) => {
            e.preventDefault();
            const moneyCalculation =
              payer === 0 ? Math.abs(yourExpense) : -Math.abs(yourExpense);
            const updatedList = userList.map((u) =>
              u.id === selectedUser.id
                ? { ...u, moneyOwe: moneyCalculation }
                : u,
            );
            setItemList(updatedList);
          }}
        >
          <h1 className={"col-span-2"}>
            SPLIT A BILL WITH {selectedUser.name}
          </h1>
          <div>Bill Value</div>
          <input
            type={"text"}
            className="bg-amber-50"
            id={"billValue"}
            onChange={(e) => {
              setBill(Number(e.currentTarget.value));
            }}
          />
          <div>Your Expense</div>
          <input
            type={"text"}
            className={"bg-amber-50"}
            id={"billValue"}
            onChange={(e) => {
              setYourExpense(Number(Number(e.currentTarget.value)));
            }}
          />
          <div>{selectedUser.name}'s expense:</div>
          <input
            type={"text"}
            className={"bg-amber-200"}
            id={"billValue"}
            disabled
            value={String(bill - yourExpense)}
          />
          <div>Who Pay The Bill?</div>
          <select
            className="bg-amber-50"
            id={"whoPayTheBill"}
            onChange={(e) => {
              setPayer(Number(e.currentTarget.value));
            }}
          >
            <option value={0}>You</option>
            <option value={1}>{selectedUser.name}</option>
          </select>
          <button
            className={"col-span-2 bg-amber-950 text-white text-xl"}
            type="submit"
          >
            Split bill
          </button>
        </form>
      )}
    </>
  );
};
