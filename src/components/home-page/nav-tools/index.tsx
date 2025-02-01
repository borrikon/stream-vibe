import Notification from "../../notification";
import Search from "../../search";

const NavTools = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Search />
      <Notification />
    </div>
  );
};

export default NavTools;
