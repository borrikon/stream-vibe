import { BurgerMenuIcon, PlayIcon } from "../../assets/icons";
import IconComponent from "../icon-component/IconComponent";
import Logo from "../logo";
import MainBtn from "../main-btn";

function Header() {
  return (
    <header className="bg-no-repeat xs:bg-cover 3xl:bg-contain bg-[url('assets/header-img/posters-mini.png'),_url('assets/header-img/fade-out-bottom.svg')] bg-[position:center_top,_center_bottom] xs:bg-[url('assets/header-img/posters-md.png'),_url('assets/header-img/fade-out-bottom.svg')] xl:bg-[url('src/assets/header-img/posters-lg.png'),_url('src/assets/header-img/fade-out-bottom.svg')]">
      <nav className="flex justify-between items-center pt-10 px-4 pb-3.5">
        <Logo />
        <button className="w-12 h-12 bg-black-10 border-black-15 rounded-xl border-4 hover:cursor-pointer">
          <IconComponent src={BurgerMenuIcon} width={24} height={24} />
        </button>
      </nav>
      <div className="mx-auto mt-4 mb-6 w-[200px] h-[200px] sx:w-[300px] sm:h-[300px] lg:w-[470px] lg:h-[470px]">
        <img src="assets/header-img/play-img.svg" className="w-full h-full" />
      </div>
      <section className="text-center text-white">
        <h1 className="font-bold text-2xl max-w-80 mx-auto pb-3 md:max-w-none">
          The Best Streaming Experience
        </h1>
        <p className="text-gray-60 text-sm mb-12 px-1">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
        <div className="flex items-center justify-center">
          <MainBtn icon={PlayIcon} text="Start Watching Now" />
        </div>
      </section>
    </header>
  );
}

export default Header;
