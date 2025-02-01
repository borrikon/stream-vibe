import IconComponent from "../icon-component/IconComponent";
import searchIcon from "../../assets/icons/search.svg";
import { useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

function Search() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useDetectOutsideClick({
    ref: inputRef,
    onOutsideClick: () => setIsOpen(false),
  });

  const toggleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex flex-row w-40">
        <input
          ref={inputRef}
          type="text"
          id="searchInput"
          className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity w-40 bg-black-06  border-black-15 border-2 text-white rounded-lg outline-none pl-1 pr-6 py-1`}
          placeholder="Film name"
        />
        <label
          htmlFor="searchInput"
          onClick={toggleSearch}
          className="absolute z-10 top-[calc(50%-9px)] right-1.5 hover:cursor-pointer"
        >
          <IconComponent src={searchIcon} width={18} />
        </label>
      </div>
    </>
  );
}

export default Search;
