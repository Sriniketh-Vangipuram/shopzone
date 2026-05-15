import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Modern Ecommerce Platform
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mt-6">
            Discover Premium Tech Products
          </h1>

          <p className="text-slate-400 text-lg mt-8 leading-relaxed max-w-xl">
            ShopZone delivers a modern
            ecommerce experience with
            blazing-fast performance,
            responsive design, and
            seamless shopping flow.
          </p>

          <div className="flex gap-6 mt-10">
            <Link to="/shop">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-lg font-bold">
                Explore Store
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-slate-700 hover:border-slate-500 transition-all px-8 py-4 rounded-2xl text-lg font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-slate-800 rounded-[40px] p-10 backdrop-blur-xl">
          <img
            src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
            alt="hero"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-black">
              Fast Delivery
            </h3>

            <p className="text-slate-400 mt-4">
              Experience lightning-fast
              shipping with premium
              logistics support.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-black">
              Secure Checkout
            </h3>

            <p className="text-slate-400 mt-4">
              Protected routes and
              secure payment-ready
              architecture.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-black">
              Modern Experience
            </h3>

            <p className="text-slate-400 mt-4">
              Responsive UI engineered
              with modern frontend
              technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;