"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "CONSULTICA", color: "text-orange-400 italic" },
  { name: "TRENDS", color: "text-cyan-400 font-extrabold italic" },
];

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-black via-[#1a1a1a] to-gray-900 text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="z-10 relative">
          <span className="inline-block bg-white text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Consultia Welcomes You
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Expert Guidance to <br /> Transform Your Business
          </h1>

          <p className="text-gray-300 mb-8 max-w-md">
            Ut varius tincidunt libero. Curabitur at lacus ac velit ornare
            lobortis. Phasellus dolor. Vestibulum ante ipsum primis in faucibus
            orci luctus et.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md text-white font-semibold"
            >
              Schedule A Consultation
            </Link>
            <Link
              href="#"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="mt-10">
            <p className="text-white font-medium mb-3">Our Valued Partner</p>
            <div className="flex flex-wrap items-center gap-6">
              {Array(2)
                .fill(null)
                .flatMap(() => partners)
                .map((partner, index) => (
                  <span key={index} className={`text-lg ${partner.color}`}>
                    {partner.name}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/hero1.jpg"
            alt="Team discussing strategy"
            fill
            className="rounded-xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
