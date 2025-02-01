import IconComponent from "../icon-component/IconComponent";
import { BurgerMenuIcon } from "../../assets/icons";

function BurgerMenu() {
  return (
    <button className="w-12 h-12 bg-black-10 border-black-15 rounded-xl border-4 hover:cursor-pointer">
      <IconComponent src={BurgerMenuIcon} width={24} height={24} />
    </button>
  );
}

export default BurgerMenu;
