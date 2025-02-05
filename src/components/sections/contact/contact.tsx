import { useState } from "react";
import { Input, message } from "antd";
import IconSelect from "../../IconSelect/iconSelect";
import TextArea from "antd/es/input/TextArea";

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = () => {
    if (!form.name || !form.subject || !form.message) {
      message.warning("Por favor, completa todos los campos.");
      return;
    }

    const whatsappMessage = `Hola, mi nombre es ${form.name}. 
      Asunto: ${form.subject} 
      Mensaje: ${form.message}`;

    window.open(
      `https://wa.me/59168530715?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-primary p-12 md:px-24 text-white">
      <h1 className="text-2xl font-bold">Contáctame</h1>

      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-1 ">

            Nombre
          </label>
          <Input 
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1">
            Asunto
          </label>
          <Input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block mb-1">
            Mensaje
          </label>
          <TextArea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={500}
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="button"
            className="bg-tertiary flex items-center justify-center  text-white px-4 py-2 rounded w-full md:w-auto"
            onClick={sendMessage}
          >
            <IconSelect
              icon="instagram"
              classNames="text-white me-2"
              color="currentColor"
            />
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
