type NavItemPros = {
  activeLinkHandler: (e: React.MouseEvent<HTMLElement>) => void;
  name: string;
  path: string;
  isActive: boolean;
  tabRef: (el: HTMLButtonElement | null) => void;
};

function NavItem({
  activeLinkHandler,
  name,
  path,
  isActive,
  tabRef,
}: NavItemPros) {
  return (
    <button
      role="link"
      onClick={activeLinkHandler}
      ref={tabRef}
      key={name}
      value={path}
      className={`text-gray-75 text-sm capitalize z-10 px-5 py-3 rounded-xl hover:cursor-pointer text-nowrap hover:text-gray-70  ${isActive ? "select-none" : ""}`}
    >
      {name}
    </button>
  );
}

export default NavItem;
