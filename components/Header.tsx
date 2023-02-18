import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex item-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.pinimg.com/736x/2b/23/47/2b2347e1084480d433823688b14c0fd0.jpg"
            alt="logo"
            className="rounded-full object-cover"
            width={50}
            height={50}  
          />
        </Link>
        <div><h1 className="pt-5">The QUASI</h1></div>
      </div>
      <div>
        <Link 
        href="https://www.youtube.com/watch?v=x8t1FAMFsiM"
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab07] flex items-center rounded-full text-center"
        >
            Quack Quack Quack Quack
        </Link>
      </div>
    </header>
  );
}

export default Header;
