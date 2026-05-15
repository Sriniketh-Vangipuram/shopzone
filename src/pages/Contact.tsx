const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-2xl w-full">
        <h1 className="text-5xl font-black mb-6">
          Contact Us
        </h1>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-2xl text-lg font-bold">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;