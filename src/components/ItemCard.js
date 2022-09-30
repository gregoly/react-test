import React from "react";
import { BookmarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

export default function ItemCard({
  index,
  title,
  completed = false,
  saved = false,
  duration,
}) {
  return (
    <div className="flex gap-x-[22px] w-full items-stretch group">
      <div className="h-full flex flex-col items-center gap-y-1.5 min-h-[96px]">
        <div
          className={classNames(
            "w-5 h-5 flex justify-center items-center rounded-full",
            { "bg-sea-green": completed, "bg-[#FFFFFF40]": !completed }
          )}
        >
          {completed && <CheckIcon className="w-3/4" />}
        </div>
        <div
          className={classNames(
            "flex flex-1 border-x border-solid group-last:hidden",
            {
              "border-sea-green": completed,
              "border-[#FFFFFF40]": !completed,
            }
          )}
        ></div>
      </div>

      <div className="flex flex-col flex-1 gap-y-2 mb-5 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <span className=" bg-[#FFFFFF1C] rounded-lg text-sea-green text-sm leading-[17px] px-2 pb-1 pt-[3px]">
              Unit
            </span>
            {saved && (
              <div className="flex items-center justify-center bg-[#FFFFFF1C] rounded-full w-[23px] h-[23px]">
                <BookmarkIcon className="w-2/3 text-sea-green " />
              </div>
            )}
          </div>

          <span className=" text-[#FFFFFF80] text-xs leading-[15px] tracking-[1.2px]">
            {completed ? "COMPLETED" : "INCOMPLETE"}
          </span>
        </div>
        <div className="flex justify-between items-end pb-6 border-b border-[#FFFFFF1A]">
          <p className="text-lg leading-[23px] text-white whitespace-nowrap">
            <span className="text-[#FFFFFF80]">{index}. </span>
            {title}
          </p>
          <span className=" text-xs leading-[15px] text-[#FFFFFF80] tracking-[1.2px]">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
