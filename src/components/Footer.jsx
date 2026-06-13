import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-zinc-600 font-sans border-t border-zinc-100">

      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">

          <div className="flex items-center space-x-2">
            <div>
              <h4 className="text-zinc-900 font-semibold text-sm">Visit Us</h4>
              <p className="text-xs text-zinc-500 mt-0.5">New Orleans, USA</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div>
              <h4 className="text-zinc-900 font-semibold text-sm">Call Us</h4>
              <p className="text-xs text-zinc-500 mt-0.5">+12 958 648 597</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div>
              <h4 className="text-zinc-900 font-semibold text-sm">Working Hours</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div>
              <h4 className="text-zinc-900 font-semibold text-sm">Email Us</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Shopcart@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl font-bold tracking-tight text-emerald-800">
              ZENTOR<span className="text-emerald-600">Y</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
              Discover curated furniture collections at Shopcartyt, blending style and comfort to elevate your living spaces.
            </p>

            <div className="flex items-center space-x-3 pt-2 text-xs font-medium tracking-wide text-zinc-400">
              <a href="#" className="hover:text-zinc-800 transition-colors">YT</a>
              <span>•</span>
              <a href="#" className="hover:text-zinc-800 transition-colors">GH</a>
              <span>•</span>
              <a href="#" className="hover:text-zinc-800 transition-colors">LN</a>
              <span>•</span>
              <a href="#" className="hover:text-zinc-800 transition-colors">FB</a>
              <span>•</span>
              <a href="#" className="hover:text-zinc-800 transition-colors">SL</a>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-zinc-600 hover:text-zinc-900 transition-colors">About us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact us</Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 hover:text-zinc-900 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-900 font-semibold text-base mb-4">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/mobiles" className="text-zinc-600 hover:text-zinc-900 transition-colors">Mobiles</Link>
              </li>
              <li>
                <Link href="/categories/appliances" className="text-zinc-600 hover:text-zinc-900 transition-colors">Appliances</Link>
              </li>
              <li>
                <Link href="/categories/smartphones" className="text-zinc-600 hover:text-zinc-900 transition-colors">Smartphones</Link>
              </li>
              <li>
                <Link href="/categories/air-conditioners" className="text-zinc-600 hover:text-zinc-900 transition-colors">Air Conditioners</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-zinc-900 font-semibold text-base">Newsletter</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Subscribe to our newsletter to receive updates and exclusive offers
            </p>
            <form className="flex flex-col space-y-2.5 max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border border-zinc-200 rounded-md bg-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white text-sm font-medium py-2.5 px-4 rounded-md hover:bg-zinc-800 transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
