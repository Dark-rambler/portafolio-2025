import { Carousel } from "antd";
import { projects } from "../../../constants/staticList";

export default function RecentProjectsSection() {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <article className=" px-12 md:px-24 py-24 bg-primary">
      <div className=" flex justify-center">
        <div className="text-quaternary me-3 text-4xl">Proyectos</div>
        <div className="text-tertiary text-4xl">Recientes</div>
      </div>
      <Carousel autoplay arrows={true} adaptiveHeight={true} draggable={true}>
        {projects.map((project, index) => (
          <div key={index}>
            <img
            className="object-cover w-full h-96"
              src={project.image}
              alt={project.title}
              style={contentStyle}
            />
          </div>
        ))}
      </Carousel>
    </article>
  );
}
