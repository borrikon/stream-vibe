import { useRef } from "react";

type DropdownProps = {
  children: React.ReactElement;
};

function Dropdown({ children }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black-30" ref={dropdownRef}>
      {children}
    </div>
  );
}

export default Dropdown;
