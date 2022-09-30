import React from "react";
import ItemCard from "./ItemCard";

export default function Sidebar({ items }) {
  return (
    <div className="w-[438px] flex flex-col bg-green-2">
      <div className="px-10 py-8 flex flex-col gap-y-3 bg-green-1">
        <p className="text-white text-lg leading-[23px] text-left">
          Blockchain foundations
        </p>
        <div className="w-full bg-white/10 h-2">
          <div className="bg-sea-green w-[275px] h-full"></div>
        </div>
      </div>
      <div className="px-10 py-8 flex flex-col gap-y-1">
        {items.map((item) => (
          <ItemCard {...item} />
        ))}
      </div>
    </div>
  );
}
