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
    <div className="fixed w-full  z-40 top-0">
      <div
        className={
          "bg-secondary lg:bg-primary text-white z-40 flex justify-between items-center h-32 lg:pe-80 ps-5 py-5"
        }
      >
        <div className="h-full flex items-center">
          <a
            href=""
            className="bg-[url('/common/logo1.png')] h-16 w-16 -rotate-12 bg-cover hidden "
          ></a>
          <h2 className="font-mono cursor-pointer hover:text-tertiary transition-all hover:animate-pulse text-2xl ms-2">
            {labels.pageName}
          </h2>
        </div>
        <div className=" hidden lg:visible lg:text-quaternary lg:bg-primary lg:h-full lg:flex lg:justify-center lg:items-center">
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
          <span className="ms-5 hidden lg:flex items-center">
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
          className="lg:hidden  me-10 hover:text-tertiary transition-all duration-300 ease-out"
        >
          <IconSelect icon={menuOpen ? "close" : "menu"} />
        </span>
      </div>
      <div
        className={
          menuOpen
            ? "lg:hidden absolute top-32 right-0 bg-secondary text-white w-full  flex flex-col transition-all  duration-300 ease-out -z-10"
            : " absolute min-h-40 -top-44 right-0 bg-secondary text-white w-full flex flex-col transition-all duration-300 ease-out  -z-10 "
        }
      >
        <div className={menuOpen ? "flex flex-col  my-6" : "flex flex-col "}>
          {navMenuItems.map((item, index) => {
            return (
              <a
                className="hover:text-tertiary mb-3 transition-all duration-700 ease-out mx-7 "
                key={index}
                href={item.link}
              >
                {t("nav." + item?.translation)}
              </a>
            );
          })}
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
              className="bg-primary mx-7 border-s-emerald-300 text-white"
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
        </div>
      </div>
    </div>
  );
}
