function formContact() {
  return (
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

      <div className="flex justify-center floating-title">
        <button
          type="button"
          className="px-8 py-3 text-sm border rounded-lg border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-[1.05]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default formContact;
