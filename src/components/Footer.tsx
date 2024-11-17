
const Footer = () => {
  return (
    <footer className=" text-gray-300">
      <div className="mx-auto bg-[#141414]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-[10vh] pb-[5vh]  sm:px-6 lg:px-[10vw] ">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-5xl text-white font-light tracking-wide">ESMÉE</h2>
            <p className="text-2xl font-light leading-relaxed">
              Esmée, a fashion theme especially designed for online clothing & accessory stores.
            </p>
            <p className="text-2xl font-light">+ 40 282 355 9874</p>
          </div>

          {/* Discover Section */}
          <div className="space-y-4">
            <h3 className="text-3xl text-white">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Fashion News</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Latest products</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Your cart</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Track And Trace</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Wishlist</a></li>
            </ul>
          </div>

          {/* Help & Information Section */}
          <div className="space-y-4">
            <h3 className="text-3xl text-white">Help & Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">How do I create</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">About Store</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">Find us easy</a></li>
              <li><a href="#" className="text-2xl font-light hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 ">
            <h3 className="text-3xl text-white">Contact us</h3>
            <p className="text-xl font-light">
              For any additional questions feel free to contact us here
            </p>
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full bg-transparent border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Submit"
              >
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 px-0 mx-0 py-10 text-center text-2xl text-slate-400 font-thin bg-black">
          © 2021 Qode Interactive, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;