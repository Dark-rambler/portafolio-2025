import { navMenuItems } from "../../constants/staticList";

export default function Header() {
  return (
    <div className="bg-primary ">
      {navMenuItems.map((item, index) => {
        return (
          <a className="" key={index} href={item.link}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
