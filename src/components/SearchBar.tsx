import { cn } from "@/utils/cn";
import { ChangeEventHandler, FormEventHandler } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  className,
}: Props) {
  return (
    <form
      action=""
      className={cn(
        "flex relative items-center justify-center h-10",
        className
      )}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={value}
        placeholder="Location..."
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full"
        onChange={onChange}
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
        <IoSearch />
      </button>
    </form>
  );
}
