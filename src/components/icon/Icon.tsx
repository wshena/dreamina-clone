import { RiMenu3Fill } from "react-icons/ri";
import { FaArrowLeft, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { IoIosFolder, IoMdDownload } from "react-icons/io";
import { SlOptions } from "react-icons/sl";

export const DreaminaIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="blue" role="presentation" xmlns="http://www.w3.org/2000/svg" className="icon-kT4hh0"><g><path data-follow-fill="currentColor" d="M20.752 13.971a.82.82 0 0 0-.593-.74c-4.5-1.174-7.147-3.851-8.104-9.585a.491.491 0 0 0-.489-.401.462.462 0 0 0-.464.407c-.605 5.74-2.894 8.444-7.305 9.664a.769.769 0 0 0-.547.746c.004.353.259.66.615.743 3.15.73 6.568 2.555 7.644 5.528a.639.639 0 0 0 .594.417.587.587 0 0 0 .565-.413c.893-2.99 4.386-4.85 7.516-5.614a.736.736 0 0 0 .567-.752Z" fill="currentColor"></path><path data-follow-stroke="currentColor" strokeWidth=".6" d="M20.753 13.972h-.002m0 0a.82.82 0 0 0-.592-.74c-4.5-1.175-7.147-3.852-8.104-9.586a.491.491 0 0 0-.489-.401.462.462 0 0 0-.464.407c-.605 5.74-2.894 8.444-7.305 9.664a.769.769 0 0 0-.547.746m17.502-.09a.736.736 0 0 1-.568.751c-3.13.764-6.623 2.624-7.516 5.614a.587.587 0 0 1-.565.413.639.639 0 0 1-.594-.417c-1.076-2.973-4.493-4.797-7.644-5.528a.783.783 0 0 1-.615-.743m0 0h.002" stroke="currentColor"></path></g></svg>
  )
}

export const OptionsIcon = ({size, color, style}:Icon) => {
  return <SlOptions size={size} color={color} className={style} />
}

export const FullBookmarkIcon = ({size, color, style}:Icon) => {
  return <FaBookmark size={size} color={color} className={style} />
}

export const BookmarkIcon = ({size, color, style}:Icon) => {
  return <FaRegBookmark size={size} color={color} className={style} />
}

export const DownloadIcon = ({size, color, style}:Icon) => {
  return <IoMdDownload size={size} color={color} className={style} />
}

export const FolderIcon = ({size, color, style}:Icon) => {
  return <IoIosFolder size={size} color={color} className={style} />
}

export const LeftArrowIcon = ({size, color, style}:Icon) => {
  return <FaArrowLeft size={size} color={color} className={style} />
}

export const MenuIcon = ({size, color, style}:Icon) => {
  return <RiMenu3Fill size={size} color={color} className={style} />
}