import { useTranslation } from "react-i18next";
import IconSelect from "../../IconSelect/iconSelect";

export default function MySkillsSection() {
  const [t] = useTranslation("global");
  return (
    <article className="py-12 px-12  md:px-24 bg-secondary">
      <div className="flex ">
        <div className="me-2"> {t("mySkills.my")}</div>{" "}
        <div className="text-tertiary ">{t("mySkills.skills")}</div>
      </div>
      <h1 className="text-quaternary mt-4 text-5xl overflow-visible md:h-14 font-semibold">
        {t("mySkills.title")}
      </h1>
      <section className="mt-4">
        <div className="grid md:grid-cols-2 gap-4 mx-auto">
          <div className="bg-primary p-10 flex flex-col justify-center items-center rounded-lg">
            <span>
              <IconSelect icon="frontend" className="fill-tertiary " />
            </span>
            <h3 className="mt-4 font-bold text-xl  ">
              {t("mySkills.frontEndTitle")}
            </h3>
            <p className="text-center mt-4">
              {t("mySkills.frontEndDescription")}
            </p>
          </div>
          <div className="bg-primary p-10 flex flex-col justify-center items-center rounded-lg">
            <span>
              <IconSelect icon="backend" className="fill-tertiary  " />
            </span>
            <h3 className="mt-4 font-bold text-xl">
              {t("mySkills.backEndTitle")}
            </h3>
            <p className="text-center mt-4">
              {t("mySkills.backEndDescription")}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
} 