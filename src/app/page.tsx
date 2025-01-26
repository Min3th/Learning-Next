import Image from "next/image";
import heading from "./Images/mainimage.png";
import junkyard from "./Images/junkyard.jpg";

export default function Home() {
  return (
    <div className=" bg-white  items-center justify-items-center min-h-screen">
      <Image src={heading} alt="main-image" width={800} height={400} />
      <Image src={junkyard} alt="junk-yard" width={800} height={400} />
    </div>
  );
}
