import { PlayIcon } from "../../../assets/icons";
import CommonBtn from "../../common-btn";

function Intro() {
  return (
    <section className="text-center text-white">
      <h1 className="font-bold text-2xl max-w-80 mx-auto pb-3 md:max-w-none">
        The Best Streaming Experience
      </h1>
      <p className="text-gray-60 text-sm mb-12 px-1">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere.
      </p>
      <div className="flex items-center justify-center">
        <CommonBtn icon={PlayIcon} text="Start Watching Now" />
      </div>
    </section>
  );
}

export default Intro;
