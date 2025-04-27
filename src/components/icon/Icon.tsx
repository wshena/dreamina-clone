import { RiMenu3Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

export const LeftArrowIcon = ({size, color, style}:Icon) => {
  return <FaArrowLeft size={size} color={color} className={style} />
}

export const MenuIcon = ({size, color, style}:Icon) => {
  return <RiMenu3Fill size={size} color={color} className={style} />
}