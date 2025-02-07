import IconSelect from "../IconSelect/iconSelect";

export default function Footer() {
  return (
    <div className="bg-secondary z-50 py-2 text-white">
      <div className="flex justify-center items-center h-16">
        <p className="text-center">
          © {new Date().getFullYear()} - Hecho con ❤️ por{" "}
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
          <a
            href=""
            className="hover:text-tertiary transition-all duration-300 ease-out"
          >
            <IconSelect icon="instagram" />
          </a>
          <a
            href=""
            className="hover:text-tertiary transition-all duration-300 ease-out"
          >
            <IconSelect icon="linkedin" />
          </a>
          <a
            href=""
            className="hover:text-tertiary transition-all duration-300 ease-out"
          >
            <IconSelect icon="github" />
          </a>
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
