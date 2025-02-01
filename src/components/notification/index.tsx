import IconComponent from "../icon-component/IconComponent";
import bell from "../../assets/icons/ring.svg";
function Notification() {
  return (
    <div>
      <IconComponent src={bell} width={18} />
    </div>
  );
}

export default Notification;
