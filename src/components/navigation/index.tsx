import { useRef } from "react";
import NavItem from "./NavItem";
import useNavActiveTab from "./useNavActiveTab";

const LINKS = [
  { name: "home", path: "/" },
  { name: "Movies & Shows", path: "/movie" },
  { name: "Support", path: "/support" },
  { name: "Subscriptions", path: "/subscriptions" },
];

function Nav() {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const {
    setActiveLink,
    setActiveTabIndex,
    tabUnderlineLeft,
    tabUnderlineWidth,
    activeLink,
  } = useNavActiveTab(tabsRef);

  const activeLinkHandler = (
    e: React.MouseEvent<HTMLElement>,
    index: number,
    path: string
  ) => {
    e.preventDefault();
    setActiveLink(path);
    setActiveTabIndex(index);
  };

  return (
    <nav className="flex justify-center items-center p-2 bg-black-06 rounded-xl border-[3px] relative border-black-10">
      <span
        className="absolute bottom-0 top-0 flex z-5 overflow-hidden rounded-sm py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-xl bg-gray-200/30" />
      </span>
      {LINKS.map((el, index) => (
        <NavItem
          activeLinkHandler={(e) => activeLinkHandler(e, index, el.path)}
          name={el.name}
          path={el.path}
          tabRef={(el: HTMLButtonElement | null) =>
            (tabsRef.current[index] = el)
          }
          isActive={activeLink === el.path}
        />
      ))}
    </nav>
  );
}

export default Nav;
