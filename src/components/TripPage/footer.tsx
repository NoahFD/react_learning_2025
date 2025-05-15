type Item = {
  id: string;
  name: string;
  quantity: number;
  status: string;
};

type Props = {
  itemList: Item[];
};

const Footer = ({ itemList }: Props) => {
  const itemListCompleted = itemList.filter((item) => item.status === "done");
  return (
    <div className="col-span-2 gap-4 text-4xl text-center">
      You have {itemList.length} Item on your list which you have already pack{" "}
      {Number(itemListCompleted.length / itemList.length) * 100 > 0
        ? Number(itemListCompleted.length / itemList.length) * 100
        : "0"}{" "}
      %
    </div>
  );
};

export default Footer;
