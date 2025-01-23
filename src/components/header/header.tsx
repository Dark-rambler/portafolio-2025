import { labels } from "../../constants/labels";
import { navMenuItems } from "../../constants/staticList";

export default function Header() {
  return (
    <div className="fixed w-full z-50">
      <div className="bg-primary text-white flex  justify-between items-center h-32 pe-80 ps-5 py-5">
        <div className="h-full flex items-center">
          <a
            href=""
            className="bg-[url('/common/logo1.png')] h-16 w-16  -rotate-12 bg-cover "
          ></a>
          <h2 className="font-mono text-2xl ms-2">{labels.pageName}</h2>
        </div>
        <div className=" text-quaternary bg-primary h-full flex justify-center items-center">
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
      </div>
    </div>
  );
}
