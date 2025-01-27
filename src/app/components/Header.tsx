import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-auto w-full flex flex-wrap items-center justify-between px-10 py-4 bg-white sticky top-0 z-10">
      <div className="w-[120px] h-[40px] flex-shrink-0">
        <Link href={"/"}>
          <Image src="/Morent-Logo.png" alt="Logo" width={150} height={50} />
        </Link>
      </div>

      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        <Image
          src="/Searchbar-search.png"
          alt="Search Bar Icon"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
        />
        <Image src="/filter.png" alt="Filter Icon" width={30} height={30} />
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a href="#">
          <Image
            src="/Heart-Like.png"
            alt="Heart Like Icon"
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image
            src="/Notification.png"
            alt="Notification Icon"
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image
            src="/Settings.png"
            alt="Settings Icon"
            width={30}
            height={30}
          />
        </a>
        <a href="#">
          <Image src="/profil.png" alt="Profile Image" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
