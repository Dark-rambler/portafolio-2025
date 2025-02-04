import { Carousel } from "antd";
import { projects } from "../../../constants/staticList";
import { useTranslation } from "react-i18next";

export default function RecentProjectsSection() {
  const [t] = useTranslation("global");
  return (
    <article className=" px-12 md:px-24 py-24 bg-primary" id="projects">
      <div className=" md:flex justify-center">
        <div className="text-quaternary me-3 text-4xl">
          {t("recentProjects.recent")}
        </div>
        <div className="text-tertiary text-4xl">
          {t("recentProjects.projects")}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-3">{t("recentProjects.title")}</div>
      </div>
      <div className="mt-10 hidden md:block">
        <Carousel
          centerMode={true}
          centerPadding="100px "
          slidesToShow={2}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={true}
          draggable={true}
          
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className=" p-5 cursor-pointer  hover:scale-110 transform transition duration-500 ease-in-out"
            >
              <div className="  rounded-lg flex justify-center items-center">
                <img src={project.image}
                  className=" h-60 object-cover rounded-lg  "
                />
              </div>

              <p className="text-center text-quaternary mt-3">
                {project.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-10 md:hidden block">
        <Carousel
          centerMode={true}
          centerPadding="0px "
          slidesToShow={3}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          draggable={true}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className=" p-2 mb-6 cursor-pointer  hover:scale-110 transform transition duration-500 ease-in-out"
            >
              <div className=" bg-tertiary/50 rounded-lg flex justify-center items-center">
                <img src={project.image} 
                  className="w-64 h-64 object-cover rounded-lg  "
                />
              </div>

              <p className="text-center text-quaternary mt-3">
                {project.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </article>
  );
}
