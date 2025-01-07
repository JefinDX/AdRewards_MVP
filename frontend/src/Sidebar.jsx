import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
      <SidebarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tool tip message" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
