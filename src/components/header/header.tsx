import { useState } from "react";
import { labels } from "../../constants/labels";
import { navMenuItems } from "../../constants/staticList";
import IconSelect from "../IconSelect/iconSelect";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50" >
      <div className={"bg-primary text-white flex justify-between items-center md:h-32 md:pe-80 ps-5 py-5" }  >
        <div className="h-full flex items-center">
          <a
            href=""
            className="bg-[url('/common/logo1.png')] h-16 w-16  -rotate-12 bg-cover "
          ></a>
          <h2 className="font-mono text-2xl ms-2">{labels.pageName}</h2>
        </div>
        <div className=" hidden md:visible md:text-quaternary md:bg-primary md:h-full md:flex md:justify-center md:items-center">
          {navMenuItems.map((item, index) => {
            return (
              <a
                className=" hover:text-tertiary ml-8 transition-all duration-300 ease-out"
                key={index}
                href={item.link}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden  me-10 hover:text-tertiary transition-all duration-300 ease-out"
        >
          <IconSelect icon={menuOpen ? "close" : "menu"} />
        </span>
        <div className={ menuOpen ? "md:hidden absolute top-32 right-0 bg-primary text-white w-60 h-96 flex flex-col items-center justify-center" : "hidden"}>
          {menuOpen && (
            <div className="absolute top-32 right-0 bg-primary text-white w-60 h-96 flex flex-col items-center justify-center">
              {navMenuItems.map((item, index) => {
                return (
                  <a
                    className="hover:text-tertiary my-4"
                    key={index}
                    href={item.link}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
