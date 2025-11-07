import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
              <div className="flex items-center">
                <h4 className="mr-2 text-lg font-semibold text-cyan-300">Email:</h4>
                <p className="text-sm">ejemplo1@gmail.com</p>
              </div>

              <div className="flex items-center">
                <h4 className="mr-2 text-lg font-semibold text-cyan-300">Email:</h4>
                <p className="text-sm">ejemplo2@gmail.com</p>
              </div>

              <div className="flex items-center">
                <h4 className="mr-2 text-lg font-semibold text-cyan-300">Email:</h4>
                <p className="text-sm">ejemplo3@gmail.com</p>
              </div>
              <div className="flex items-center justify-center gap-4 m-7">
                <FaLinkedin className="text-2xl transition text-cyan-300 hover:text-white" />
                <FaGithub className="text-2xl transition text-cyan-300 hover:text-white" />
                <FaEnvelope className="text-2xl transition text-cyan-300 hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 border rounded-lg border-cyan-300 bg-black/30 backdrop-blur-sm">
            <div className="flex justify-center">
              <h2 className="mb-8 text-4xl text-center font-futuristic text-cyan-300 floating-title">Your data</h2>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-sm text-white border border-gray-700 rounded-lg outline-none bg-black/30 focus:border-cyan-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-sm text-white border border-gray-700 rounded-lg outline-none bg-black/30 focus:border-cyan-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message..."
                className="w-full px-4 py-3 text-sm text-white border border-gray-700 rounded-lg outline-none bg-black/30 focus:border-cyan-300"
              ></textarea>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-8 py-3 text-sm border rounded-lg border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-[1.05]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
