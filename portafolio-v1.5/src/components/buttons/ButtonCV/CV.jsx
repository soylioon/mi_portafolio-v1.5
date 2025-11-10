import { FaEye, FaDownload } from 'react-icons/fa';

function ButtonCV() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="@/public/cvc/CV.pdf"
        target="_blank"
        className="flex items-center gap-2 px-5 py-2 text-sm border rounded-lg border-white text-white hover:text-black hover:bg-white transition-all duration-300 hover:scale-[1.05]"
      >
        <FaEye className="text-base" /> Ver CV
      </a>

      <a
        href="@/public/cvc/CV.pdf"
        download
        className="flex items-center gap-2 px-5 py-2 text-sm border rounded-lg border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-[1.05]"
      >
        <FaDownload className="text-base" /> Download CV
      </a>
    </div>
  );
}

export default ButtonCV;
