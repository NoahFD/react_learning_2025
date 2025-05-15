type Item = {
  id: string;
  name: string;
  quantity: number;
  status: string;
};

type Props = {
  id: string;
  name: string;
  status: string;
  quantity: number;
  itemList: Item[];
  setItemList: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const SingleItem = ({
  quantity,
  name,
  id,
  status,
  itemList,
  setItemList,
}: Props) => {
  const removeItemFromList = (idToRemove: string) => {
    const updatedList = itemList.filter((item) => item.id !== idToRemove);
    setItemList(updatedList);
  };

  const setToDone = (idToDone: string) => {
    const updatedList = itemList.find((item) => item.id == id);
    const withoutnewUpdatedList = itemList.filter(
      (item) => item.id !== idToDone,
    );
    setItemList([
      ...withoutnewUpdatedList,
      {
        id: idToDone,
        name: updatedList?.name ? updatedList.name : "",
        quantity: updatedList?.quantity ? updatedList?.quantity : 0,
        status: "done",
      },
    ]);
  };

  return (
    <div className="flex justify-center gap-3 bg-amber-800 text-white p-3 rounded-2xl">
      <p
        onClick={() => {
          setToDone(id);
        }}
        className={status === "done" ? "line-through" : ""}
      >
        {quantity} {name}
      </p>
      <button onClick={() => removeItemFromList(id)}>X</button>
    </div>
  );
};
