import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap px-3 py-4 text-2xl font-medium tracking-normal leading-relaxed text-white bg-indigo-500 rounded-xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1abe3a67da7f8e93bf4ce2a880852eb6371fbe236a6c7417b58f9058dba4e29?placeholderIfAbsent=true&apiKey=e5cda985c754462e9c5f3c8a32015bec"
        alt=""
        className="object-contain shrink-0 w-10 aspect-square"
      />
      <h1 className="flex-auto self-start w-[1785px] max-md:max-w-full">
        Generic Website Rating
      </h1>
    </header>
  );
}

export default Header;