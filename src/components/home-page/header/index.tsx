import Logo from "../../logo";
import TopBar from "../../top-bar";
import BurgerMenu from "../../burger-menu";
import PlayImage from "../play-image";
import Intro from "../intro";
import Nav from "../../navigation";
import { useResponsive } from "../../../hooks/useResponsive";
import NavTools from "../nav-tools";

function Header() {
  const { isMobile } = useResponsive();
  return (
    <header className="bg-no-repeat xs:bg-cover 3xl:bg-contain bg-[url('assets/header-img/posters-mini.png'),_url('assets/header-img/fade-out-bottom.svg')] bg-[position:center_top,_center_bottom] xs:bg-[url('assets/header-img/posters-md.png'),_url('assets/header-img/fade-out-bottom.svg')] xl:bg-[url('src/assets/header-img/posters-lg.png'),_url('src/assets/header-img/fade-out-bottom.svg')]">
      <TopBar>
        <Logo />
        {!isMobile ? <Nav /> : null}
        {isMobile ? <BurgerMenu /> : <NavTools />}
      </TopBar>
      <PlayImage />
      <Intro />
    </header>
  );
}

export default Header;
