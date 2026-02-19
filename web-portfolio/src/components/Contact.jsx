import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="mb-16 w-full flex flex-col conent-center items-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Contacts
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
          Let’s work together
        </h2>

        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Have a project in mind or want to discuss opportunities? I’d love to
          hear from you.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Display Section */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Get in touch
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question, a project idea, or just want to say
              hi, feel free to reach out!
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-700">
            <Mail
              size={45}
              className="p-3 border-amber-100 bg-amber-50 rounded-md"
            />
            <a
              href="mailto:boatengmensahmichael@gmail.com"
              className="hover:text-black transition"
            >
              boatengmensahmichael@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin
              size={45}
              className="p-3 border-amber-100 bg-amber-50 rounded-md"
            />
            <span>Accra, Ghana</span>
          </div>

          {/* Social Links */}
          <div>
            <p>Connect with me</p>
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://linkedin.com/in/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
