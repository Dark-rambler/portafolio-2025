import { useState } from "react";
import { labels } from "../../constants/labels";
import { navMenuItems } from "../../constants/staticList";
import IconSelect from "../IconSelect/iconSelect";
import i18next from "i18next";
import { ConfigProvider, Select, Space } from "antd";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [t] = useTranslation("global");

  const options = [
    { value: "es", label: "Spanish", emoji: "🇪🇸", desc: "Spanish" },
    { value: "en", label: "English", emoji: "🇺🇸", desc: "English" },
  ];

  const onChange = (value: string) => i18next.changeLanguage(value);

  return (
    <div className="fixed w-full z-50">
      <div
        className={
          "bg-primary text-white flex justify-between items-center h-32 md:pe-80 ps-5 py-5"
        }
      >
        <div className="h-full flex items-center">
          <a
            href=""
            className="bg-[url('/common/logo1.png')] h-16 w-16 -rotate-12 bg-cover hidden "
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
                {t("nav." + item?.translation)}
              </a>
            );
          })}
          <span className="ms-5 hidden md:flex items-center">
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    colorBgContainer: "#21272f",
                    colorTextQuaternary: "white",
                    colorTextTertiary: "#00bd95",
                    colorBorder: "#00bd95",
                    colorText: "white",
                    optionSelectedColor: "white",
                    optionSelectedBg: "#00bd95",
                    colorBgElevated: "#21272f",
                    colorBgBase: "primary",
                  },
                },
              }}
            >
              <Select
                className="bg-primary border-s-emerald-300 text-white"
                style={{ width: 120 }}
                defaultValue={"es"}
                options={options.map((option) => ({
                  value: option.value,
                  label: (
                    <Space>
                      <span role="img" aria-label={option.label}>
                        {option.emoji}
                      </span>
                      {option.label}
                    </Space>
                  ),
                }))}
                onChange={onChange}
                optionLabelProp="label"
              />
            </ConfigProvider>
          </span>
        </div>

        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden  me-10 hover:text-tertiary transition-all duration-300 ease-out"
        >
          <IconSelect icon={menuOpen ? "close" : "menu"} />
        </span>
        <div
          className={
            menuOpen
              ? "md:hidden absolute top-32 right-0 bg-primary text-white w-60 h-96 flex flex-col items-center justify-center"
              : "hidden"
          }
        >
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
