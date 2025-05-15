import { type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Item = {
  id: string;
  name: string;
  quantity: number;
  status: string;
};

type formInput = {
  itemList: Item[];
  setItemList: React.Dispatch<React.SetStateAction<Item[]>>;
};
const ItenaryForm = ({ itemList, setItemList }: formInput) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [item, setItem] = useState<string>("");
  console.log(quantity);
  console.log(item);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    const id = uuidv4();
    setItemList([
      ...itemList,
      { id: id, quantity: quantity, name: item, status: "new" },
    ]);
    e.preventDefault();
    setQuantity(0);
    setItem("");
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="col-span-2 flex justify-center gap-10"
    >
      <h2 className={"text-3xl font-bold leading-tight"}>
        What do you need for your trip? :)
      </h2>
      <select
        onChange={(e) => {
          e.preventDefault();
          setQuantity(Number(e.target.value));
        }}
        value={quantity}
      >
        {[...Array(10).keys()].map((_, i) => (
          <option key={_}>{i}</option>
        ))}
      </select>
      <input
        className={"bg-amber-500 py-1.5 pl-2"}
        onChange={(e) => {
          e.preventDefault();
          setItem(e.target.value);
        }}
        type={"text"}
        required
        minLength={1}
        value={item}
      ></input>
      <button
        type={"submit"}
        className={"bg-amber-500 p-3 hover:bg-amber-950 hover:text-amber-50"}
      >
        Submit
      </button>
    </form>
  );
};

export default ItenaryForm;
