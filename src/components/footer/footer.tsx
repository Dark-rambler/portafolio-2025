import { useTranslation } from "react-i18next";
import { socialMediaLinks } from "../../constants/staticList";
import IconSelect from "../IconSelect/iconSelect";

export default function Footer() {
  const {t} = useTranslation("global");
  return (
    <div className="bg-secondary z-50 py-2 text-white">
      <div className="flex justify-center items-center h-16">
        <p className="text-center">
          © {new Date().getFullYear()} - {t("footer.rights")}{" "}
          <a
            href=""
            className="hover:text-tertiary transition-all duration-300 ease-out"
          >
            Edwin García
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center h-12">
          <div className="flex items-center justify-center space-x-4">
            {
              socialMediaLinks.map((socialMedia, index) => (
                <a
                  key={index}
                  href={socialMedia.link}
                  target="_blank"
                  className="hover:text-tertiary transition-all duration-300 ease-out"
                >
                  <IconSelect icon={socialMedia.icon} />
                </a>
              ))
            }
          </div>
      </div>
      <div className="flex justify-center items-center h-8">
        <a
          href="mailto:garciaramiro000@gmail.com"
          className="text-blue-300  underline"
        >
          garciaramiro000@gmail.com
        </a>
      </div>
    </div>
  );
}
