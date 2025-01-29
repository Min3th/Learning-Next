import Image from "next/image";

type ItemCardProps = {
  image: string;
  title: string;
  quantity: number;
  price: string | number;
};

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  title,
  quantity,
  price,
}) => {
  return (
    <div className="w-[300px] h-[400px] bg-white border border-gray-200 shadow-md hover:shadow-orange-400 overflow-hidden hover:shadow-md transition-shadow flex flex-col items-center">
      <div className="w-[300px] h-[200px] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="text-[25px] font-semibold text-gray-800">{title}</h3>
        <span className="text-[50px] font-bold text-green-600 text-center" >${price}</span>
        <div className="flex flex-row gap-4">
          <p className="text-[20px] text-gray-600 border-orange-400 border-[1px] py-2 px-3 rounded-xl">Items left: {quantity}</p>
          <button className="px-3 py-2 text-[15px] bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ItemCard;
