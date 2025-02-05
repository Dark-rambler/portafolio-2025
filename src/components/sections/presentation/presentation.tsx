import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { socialMediaLinks } from "../../../constants/staticList";
import IconSelect from "../../IconSelect/iconSelect";
import QueueAnim from "rc-queue-anim";

import {
  SPANISHPDFCVPATH,
  ENGLISHPDFCVPATH,
} from "../../../constants/staticRoutes";

export default function PresentationSection() {
  const currentLanguageCvPath = useRef<string>(SPANISHPDFCVPATH);
  const [t, i18n] = useTranslation("global");

  const downloadCv = () => {
    if (i18n.language === "es") {
      currentLanguageCvPath.current = SPANISHPDFCVPATH;
      window.open(currentLanguageCvPath.current, "_blank");
    } else {
      currentLanguageCvPath.current = ENGLISHPDFCVPATH;
      window.open(currentLanguageCvPath.current, "_blank");
    }
  };

  return (
    <article className="py-24 md:px-24 px-12 " id="presentation">
      <div className=" ">
        <QueueAnim delay={600} className="queue-simple grid md:grid-cols-2  gap-4 mx-auto">
          <section key={"1"} className="  ">
            <div  className="text-3xl flex">
              <div className="text-quaternary me-2">
                {t("informationPage.hi")}
              </div>
              <div className="text-tertiary">{t("informationPage.itsMe")}</div>
            </div>
            <h1  className="text-tertiary text-4xl md:text-5xl h-16 font-semibold overflow-visible md:h-14">
              {t("labels.pageName")}
            </h1>
            <section className="flex justify-center items-center md:h-1 md:overflow-hidden ">
              <div>
                <div className="bigHexagon bg-tertiary/50 md:bg-transparent flex justify-center items-center "></div>
                <div className="h-20 overflow-hidden ">
                  <div className="bigHexagonReflex bg-tertiary/50 h-4 flex justify-center items-center"></div>
                </div>
              </div>
            </section>
            <h2 className="text-quaternary text-2xl mt-2">
              {t("labels.position")}
            </h2>
            <div className="my-4">
              <p>{t("informationPage.description")}</p>
            </div>
            <button
              className="cursor-pointer mt-5 bg-tertiary text-quaternary shadow-md  border-tertiary px-4 py-2 rounded-lg 
           my-6 transform active:translate-y-0.5 transition-transform 
           duration-150 hover:bg-tertiary/75 hover:transition-all hover:duration-300
            hover:ease-out"
              onClick={() => downloadCv()}
            >
              {t("button.downloadCv")}
            </button>
            <div className="flex items-center  space-x-3 h-20">
              <p>{t("informationPage.findMe")}</p>
              {socialMediaLinks.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className=" flex justify-center items-center hover:bg-tertiary/25 smallHexagon bg-tertiary/50 animate-pulse hover:animate-none 
                  cursor-pointer  hover:scale-110 transform active:translate-y-0.5
                   transition-transform duration-150 shadow-md"
                  >
                    <span className=" hover:scale-110 transform active:translate-y-0.5 transition-transform duration-150">
                      <IconSelect icon={item.icon} />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
          <section key={"2"} className="md:flex md:justify-center md:items-center hidden overflow-hidden md:h-full ">
            <div>
              <div className="bigHexagon bg-tertiary/50 flex justify-center items-center"></div>
              <div className="h-16 overflow-hidden">
                <div className="bigHexagonReflex bg-tertiary/50 flex justify-center items-center"></div>
              </div>
            </div>
          </section>
        </QueueAnim>
      </div>
    </article>
  );
}
