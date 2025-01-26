import IconComponent from "../icon-component/IconComponent";

type MainBtnProps = {
  icon?: string;
  text?: string;
};

function MainBtn({ icon, text }: MainBtnProps) {
  return (
    <button className="flex justify-center items-center gap-2 py-3 px-6 bg-red-45 rounded-xl text-white font-light transition-colors hover:bg-red-50 hover:cursor-pointer">
      {icon ? <IconComponent src={icon} alt={text} /> : null} {text ?? ""}
    </button>
  );
}

export default MainBtn;
