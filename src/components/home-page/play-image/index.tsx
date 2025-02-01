import playImage from "../../../assets/header-img/play-img.svg";
function PlayImage() {
  return (
    <div className="mx-auto select-none mt-4 mb-6 w-[200px] h-[200px] sx:w-[300px] sm:h-[300px] lg:w-[470px] lg:h-[470px]">
      <img src={playImage} className="w-full h-full" />
    </div>
  );
}

export default PlayImage;
