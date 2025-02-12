import { Carousel } from "antd";
import { projects } from "../../../constants/staticList";
import { useTranslation } from "react-i18next";

export default function RecentProjectsSection() {
  const [t] = useTranslation("global");
  return (
    <article className=" px-12 md:px-24 py-24 bg-primary" id="projects">
      <div className=" flex justify-center">
        <div className="text-quaternary me-3 md:text-4xl text-3xl ">
          {t("recentProjects.recent")}
        </div>
        <div className="text-tertiary md:text-4xl text-3xl">
          {t("recentProjects.projects")}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-3">{t("recentProjects.title")}</div>
      </div>
      <div className="mt-10 hidden lg:block">
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
                <img
                  src={project.image}
                  className=" h-60 object-cover rounded-lg  "
                />
              </div>
              <p
                className="text-center absolute h-24 
                bottom-2 bg-primary/60 w-full text-quaternary font-semibold
                flex pt-2 items-center flex-col text-lg "
              >
                {project.title}
                <p
                  className="text-center mt-2 me-10 px-4 text-quaternary text-sm font-normal"
                >{project.description}</p>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-10 lg:hidden block">
        <Carousel
          centerMode={true}
          centerPadding="0px "
          slidesToShow={1}
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
              <div className=" relative rounded-lg flex justify-center items-center">
                <img
                  src={project.image}
                  className="object-cover rounded-lg w-full  "
                />
              </div>

              <p
                className="text-center absolute h-14 
                bottom-2 bg-primary/60 w-full text-quaternary font-semibold
                flex justify-center items-center "
              >
                {project.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </article>
  );
}
