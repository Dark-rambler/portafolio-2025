import { useTranslation } from "react-i18next";
import IconSelect from "../../IconSelect/iconSelect";

export default function MyServicesSection() {
  const [t] = useTranslation("global");
  return (
    <article className="py-12 px-12  md:px-24 bg-secondary">
      <div className="flex ">
        <div className="me-2"> {t("myServices.my")}</div>{" "}
        <div className="text-tertiary ">{t("myServices.services")}</div>
      </div>
      <h1 className="text-quaternary mt-4 text-5xl md:h-14 font-semibold">
        {t("myServices.title")}
      </h1>
      <section className="mt-4">
        <div className="grid md:grid-cols-2 gap-4 mx-auto">
          <div className="bg-primary p-10 flex flex-col justify-center items-center rounded-lg">
            <span>
              <IconSelect icon="frontend" className="fill-tertiary " />
            </span>
            <h3 className="mt-4 font-bold text-xl  ">
              {t("myServices.frontEndTitle")}
            </h3>
            <p className="text-center mt-4">
              {t("myServices.frontEndDescription")}
            </p>
          </div>
          <div className="bg-primary p-10 flex flex-col justify-center items-center rounded-lg">
            <span>
              <IconSelect icon="backend" className="fill-tertiary  " />
            </span>
            <h3 className="mt-4 font-bold text-xl">
              {t("myServices.backEndTitle")}
            </h3>
            <p className="text-center mt-4">
              {t("myServices.backEndDescription")}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
