import { button, informationPage, labels } from "../../constants/labels";
import { socialMediaLinks } from "../../constants/staticList";
import IconSelect from "../IconSelect/iconSelect";

export default function PresentationSection() {
  return (
    <article className="py-24">
      <div className="grid md:grid-cols-2  gap-4 mx-auto ">
        <section className="  ">
          <div className="text-3xl flex">
            <div className="text-quaternary me-2">{informationPage.hi}</div>
            <div className="text-tertiary">{informationPage.itsMe}</div>
          </div>
          <h1 className="text-tertiary text-5xl h-14 font-semibold">
            {labels.pageName}
          </h1>
          <section className="flex justify-center items-center md:h-1 md:overflow-hidden ">
            <div>
              <div className="bigHexagon bg-tertiary/50 md:bg-transparent flex justify-center items-center "></div>
              <div className="h-20 overflow-hidden ">
                <div className="bigHexagonReflex bg-tertiary/50 h-4 flex justify-center items-center"></div>
              </div>
            </div>
          </section>
          <h2 className="text-quaternary text-2xl mt-2">{labels.position}</h2>
          <div className="my-4">
            <p>{informationPage.description}</p>
          </div>
          <button className="bg-tertiary text-quaternary shadow-md  border-tertiary px-4 py-2 rounded-lg my-6 transform active:translate-y-0.5 transition-transform duration-150 hover:bg-tertiary/75 hover:transition-all hover:duration-300 hover:ease-out">
            {button.contact}
          </button>
          <div className="flex items-center space-x-3 h-20">
            <p>{informationPage.findMe}</p>
            {socialMediaLinks.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  className=" flex justify-center items-center hover:bg-tertiary/25 smallHexagon bg-tertiary/50 animate-blink cursor-pointer  hover:scale-110 transform active:translate-y-0.5 transition-transform duration-150 shadow-md"
                >
                  <span className=" hover:scale-110 transform active:translate-y-0.5 transition-transform duration-150">
                    <IconSelect icon={item.icon} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>
        <section className="md:flex md:justify-center md:items-center h-1 overflow-hidden md:h-full md:visible">
          <div>
            <div className="bigHexagon bg-tertiary/50 flex justify-center items-center"></div>
            <div className="h-16 overflow-hidden">
              <div className="bigHexagonReflex bg-tertiary/50 flex justify-center items-center"></div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
