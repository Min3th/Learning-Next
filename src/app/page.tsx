import Image from "next/image";
import heading from "./Images/heading.png";
import junkyard from "./Images/junkyard.webp";
import ItemCard from "./Components/itemcard";
import clock from "./Images/clock.webp";

const items = [
  {
    id: 1,
    image: clock,
    title: "Vintage Chair",
    description: "A beautiful vintage chair in excellent condition.",
    price: 120,
  },
  {
    id: 2,
    image: clock,
    title: "Antique Clock",
    description: "A classic antique clock with intricate designs.",
    price: 250,
  },
  {
    id: 3,
    image: clock,
    title: "Bunch of plastic",
    description: "A bunch of plastic.",
    price: 110,
  },
];

export default function Home() {
  return (
    <div className=" bg-white  items-center justify-items-center min-h-screen flex flex-col">
      <p className="text-[50px] font-semibold text-black">THE JUNK YARD</p>
      {/* <Image
        className="absolute top-0 z-0"
        src={junkyard}
        alt="junk-yard"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}
      <div className="flex flex-row items-center gap-8">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    
    </div>
  );
}
