import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Icon_contact from '@/components/icon/Contact';
import FormContact from '@/components/forms/contact/form';

function Contact() {
  return (
    <div className="px-4 py-20">
      <div className="grid mx-auto max-w-7xl gap-14 md:grid-cols-2">
        <div className="flex flex-col items-center space-y-8 text-gray-300">
          <p className="w-[70%] max-w-md leading-relaxed text-center md:text-left">
            Got a project, idea, or opportunity you'd like to discuss?
            <span className="text-cyan-300"> Let's build something great together.</span>
          </p>

          <div className="px-6 py-5 mx-auto w-[70%] border rounded-lg border-cyan-300 bg-black/30 backdrop-blur-sm">
            <div className="flex justify-center m-7">
              <h2 className="text-4xl font-futuristic text-cyan-300 floating-title md:text-left">Contact Me</h2>
            </div>

            <div className="flex flex-col items-center mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-2xl transition text-cyan-300 hover:text-white" />
                <a href="http://linkedin.com/in/soylion" className="text-cyan-300 hover:text-white">
                  linkedin.com/in/soylion
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaGithub className="text-2xl transition text-cyan-300 hover:text-white" />
                <a
                  href="https://github.com/soylioon/mi_portafolio-v1.5/tree/main/portafolio-v1.5"
                  className="text-cyan-300 hover:text-white"
                >
                  soylioon
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-2xl transition text-cyan-300 hover:text-white" />
                <a href="mailto:soylion.com@gmail.com" className="text-cyan-300 hover:text-white">
                  soylion@gmail.com
                </a>
              </div>

              <div className="mt-4 floating-title">
                <Icon_contact />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 border rounded-lg border-cyan-300 bg-black/30 backdrop-blur-sm">
            <div className="flex justify-center">
              <h2 className="mb-8 text-4xl text-center font-futuristic text-cyan-300 floating-title">Your data</h2>
            </div>
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
