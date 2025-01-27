import Image from "next/image";

type ItemCardProps = {
  image: string;
  title: string;
  description: string;
  price: string | number;
};

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="w-[300px] bg-white border border-gray-200  shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
      <Image src={image} alt={title} width={200} height={400} className="" />

      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
