import React from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const test = () => {};

  return (
    <div className="flex space-between rounded-3xl bg-[#383838] p-2 w-fit">
      <input
        id="input"
        type="text"
        onKeyDown={test}
        className="bg-[#383838] text-[#9c9c9c] height-full border-none outline-none pl-2 max-w-[180px]"
        placeholder="Search..."
      />
      <svg
        width="24"
        onClick={test}
        className="bg-[#383838] hover:cursor-pointer"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"
          fill="#9c9c9c"
        ></path>
      </svg>
    </div>
  );
}
