import { useTranslation } from "react-i18next";
import IconSelect from "../../IconSelect/iconSelect";
import { myTechnologies } from "../../../constants/staticList";
import { useEffect } from "react";

export default function MySkillsSection() {
  const [t] = useTranslation("global");

  useEffect(() => {
    console.log(myTechnologies[0].color);
  }
  , []);

  return (
    <article className="py-12 px-12 md:px-24 bg-secondary" id="skills">
      <div className="flex ">
        <div className="me-2"> {t("mySkills.my")}</div>{" "}
        <div className="text-tertiary ">{t("mySkills.skills")}</div>
      </div>
      <h1 className="text-quaternary mt-4 text-5xl overflow-visible md:h-14 font-semibold">
        {t("mySkills.title")}
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-8">
        {myTechnologies.map((technology, index) => (
          <div
            key={index}
            className=" flex flex-col 
             items-center mt-8 py-4"
          >
            <div className={`md:w-32 md:h-32 w-15  h-15 fill-slate-400/10 duration-150 transition-all  ${"   hover:fill-"+technology.color} cursor-pointer`} >
              <IconSelect
                icon={technology.icon}
                color=""
                classNames="md:w-32  md:h-32 w-15  h-15 "
              />
              {/* <div className="mt-2 md:mt-0 md:ml-4">
                <h2 className="text-quaternary text-2xl font-semibold">{technology.name}</h2>
                <p className="text-tertiary">{technology.description}</p>
              </div> 
              */}
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-tertiary">{t(technology.translation)}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
