const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-black">
          ShopZone
        </h2>

        <p className="text-slate-400 text-center">
          Built with React,
          TypeScript, Tailwind CSS,
          React Router, Context API,
          and modern frontend
          architecture.
        </p>
      </div>
    </footer>
  );
};

export default Footer;