"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* ── NAVBAR – transparent on hero, white on scroll ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white border-b border-gray-200 shadow-[0_1px_8px_rgba(15,35,71,0.07)]"
          : "bg-transparent border-transparent shadow-none"
          }`}
      >
        <div className="max-w-[1180px] mx-auto px-7 h-[66px] flex items-center gap-2">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4 relative w-[150px] h-[48px]">
            <Image
              src="/logo-without-bg.png"
              alt="FilterFresh Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none ml-auto">
            {[
              { href: "#about", label: "About", id: "nav-about" },
              { href: "#how-it-works", label: "How It Works", id: "nav-how" },
              {
                href: "#service-area",
                label: "Service Area",
                id: "nav-service",
              },
              { href: "#contact", label: "Contact", id: "nav-contact" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  id={link.id}
                  className={`text-sm font-semibold px-3.5 py-1.5 rounded-md transition-all duration-300 ${scrolled
                    ? "text-gray-600 hover:bg-gray-100 hover:text-[#1e3a8a]"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                    }`}
                  style={
                    scrolled ? {} : { textShadow: "0 1px 4px rgba(0,0,0,0.35)" }
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                id="nav-pricing"
                className="text-sm font-bold bg-[#2d8653] text-white px-3.5 py-1.5 rounded-md hover:bg-[#246b42] transition-all ml-1"
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* Mobile hamburger – white on hero, navy when scrolled */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ml-auto"
            aria-label="Open menu"
            id="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-[22px] h-[2px] rounded-sm transition-colors duration-300 ${scrolled ? "bg-[#1e3a8a]" : "bg-white shadow-sm"
                  }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[66px] left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-1 z-50">
            {[
              { href: "#about", label: "About" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#service-area", label: "Service Area" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 font-medium hover:text-[#1e3a8a] text-base py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#pricing"
              className="text-[#2d8653] font-bold hover:text-[#246b42] text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO SECTION – fullscreen image, transparent navbar bleeds into it ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "70svh", minHeight: 500, maxHeight: 750 }}
      >
        {/* Background image – full coverage */}
        <Image
          src="/worker-filter-fresh.jpeg"
          alt="FilterFresh technician holding air filter"
          fill
          className="object-cover object-[10%_top] ml-20"
          priority
          sizes="100vw"
        />

        {/* Left–to–right gradient: solid white on far left → fades → transparent */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 22%, rgba(255,255,255,0.7) 38%, rgba(255,255,255,0.15) 58%, transparent 75%)",
          }}
        />

        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: "32%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.65) 55%, #ffffff 100%)",
          }}
        />

        {/* Hero text + CTA inside hero */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-[420px] md:max-w-[480px]">
            <h1
              className="font-medium text-[#1e3a8a] leading-[1.08] "
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.6rem)" }}
            >
              Breathe Cleaner
              <br />
              Air at Home
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              Your HVAC system circulates the air you breathe every day.
              <br />
              FilterFresh keeps it clean with scheduled filter replacement and professional care.
            </p>

            {/* CTA below headline */}
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#plans"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white px-6 py-3 rounded-md shadow-md transition-all font-semibold text-sm whitespace-nowrap"
                id="btn-hero-protect"
              >
                Protect My Air
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* ── IAQ CONTENT SECTION ── */}
      <section
        className="w-full pt-16 pb-20 md:pt-20 md:pb-24 bg-white"
        id="pricing"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            {/* Left: copy */}
            <div className="md:col-span-7">
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#2d8653] bg-[#2d8653]/10 px-3 py-1 rounded-full">
                Indoor Air Quality
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1e3a8a] leading-tight">
                Most Homes Are Breathing Dirty Air
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                Americans spend nearly 90% of their time indoors. When HVAC
                filters clog with dust, pollen, and pollutants, those particles
                don&apos;t disappear — they circulate through your home every
                time the system runs.
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                FilterFresh makes clean indoor air simple. We deliver and replace
                your filters on schedule so your system runs efficiently and the
                air you breathe stays fresh.
              </p>

              <div className="mt-8 md:mt-10">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white px-7 py-3.5 rounded-md shadow-md transition-all font-semibold"
                  id="btn-see-how"
                >
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right: Impact card */}
            <div className="md:col-span-5">
              <div className="relative bg-white border-transparent rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(17,24,39,0.08)]">
                {/* Top faded image */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src="/people-adquiring-filter-fresh.jpeg"
                    alt="People acquiring FilterFresh service"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Fade to white at bottom – starts at 50% so no line is visible */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.6) 70%, #ffffff 100%)",
                    }}
                  />
                </div>

                <div className="px-6 pb-6 pt-6">
                  {/* Header – plain label, no icon */}
                  <p className="text-sm font-bold text-[#1e3a8a] tracking-widest uppercase mt-1">
                    Impact
                  </p>

                  <p className="mt-3 text-gray-900 font-semibold text-base leading-snug">
                    A clogged air filter can:
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {[
                      "Circulate airborne allergens throughout your home",
                      "Trigger or worsen allergy and asthma symptoms",
                      "Restrict airflow and strain your HVAC system",
                      "Increase indoor particulate levels",
                      "Lower overall indoor air quality",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="text-gray-800 font-semibold text-sm">
                      Most homeowners forget to change their filter.
                    </p>
                    <p className="text-gray-800 font-semibold text-sm mt-1">
                      Most families are breathing the consequences.
                    </p>
                  </div>
                </div>
                {/* end px-6 pb-6 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW SECTION ── */}
      <section
        className="bg-gray-50 border-b border-gray-200 w-full pt-12 md:py-16"
        id="pricing-options"
      >
        <div className="max-w-full mx-auto px-5 md:px-12 flex flex-row items-center relative">
          {/* Left: card */}
          <div className="w-full text-left md:w-1/2 z-10 flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-4xl font-semibold text-[#1e3a8a] mb-6 w-full">
              Choose Your Air Care Plan
            </h2>
            <div
              className="bg-white border border-gray-300 text-left rounded-lg shadow-lg p-6 w-full max-w-sm flex flex-col relative z-20"
              style={{
                maskImage:
                  "linear-gradient(to right, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 80%, transparent 100%)",
              }}
            >
              <p className="text-base font-semibold text-[#1e3a8a]">
                Standard Monthly
              </p>
              <div className="flex items-baseline mt-1">
                <span className="text-xl font-bold text-[#1e3a8a]">$</span>
                <span className="text-3xl font-bold text-[#1e3a8a] mx-1">
                  49
                </span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">+ $99 setup fee *</p>
              <a
                href="#monthly"
                className="inline-block w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2.5 text-center rounded-md shadow-md transition-all font-semibold text-sm"
                id="btn-hero-monthly"
              >
                Choose Monthly
              </a>
            </div>
          </div>

          {/* Right: worker photo */}
          <div className="w-full md:w-1/2 md:mt-20 flex items-end justify-end -mr-10 md:-mr-12">
            <div className="relative w-52 h-72 md:w-[450px] md:h-[550px]">
              <Image
                src="/worker-bg-out.png"
                alt="FilterFresh technician"
                fill
                className="object-cover object-top md:object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS SECTION ── */}
      <section
        className="py-16 relative"
        id="plans"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #f9fafb 10%, rgba(249,250,251,0.8) 40%, rgba(249,250,251,0.4) 100%), url('/bg-kitchen.png')",
          backgroundPosition: "top, bottom center",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-2xl font-semibold text-[#1e3a8a] mb-12">
            Choose Your Air Care Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
            {/* Card 1: Monthly */}
            <div
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center relative"
              id="card-monthly"
            >
              <div className="absolute -top-4 bg-[#5d8e62] text-white text-xs px-4 py-1.5 rounded-sm uppercase tracking-wide shadow-sm">
                Most Popular!
              </div>
              <div className="flex items-center justify-center text-[#1e3a8a] mb-1 mt-4">
                <span className="text-3xl font-bold align-top mt-2">$</span>
                <span className="text-5xl font-semibold">49</span>
                <span className="text-2xl text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">+ $99 setup fee *</p>
              <div className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-px w-full mb-6" />
              <ul className="w-full space-y-3 mb-8">
                <CheckItem text="Quarterly Visits (4/yr)" />
                <CheckItem text="First 2 Filters Included" />
                <CheckItem text="Air Report Each Visit" />
                <CheckItem text="$99 Setup required" />
              </ul>
              <a
                href="#monthly"
                className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2.5 text-center rounded-md shadow-md transition-all font-semibold text-sm"
                id="btn-monthly-card"
              >
                Choose Monthly
              </a>
            </div>

            {/* Card 2: Annual */}
            <div
              className="bg-white rounded-xl shadow-2xl border border-gray-100 md:-translate-y-4 relative z-10 flex flex-col items-center"
              id="card-annual"
            >
              <div
                className="w-full rounded-t-xl relative flex flex-col items-center justify-center text-white py-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,102,75,0.85) 0%, rgba(108,163,116,0.65) 100%), url('/bg-kitchen.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -top-3 bg-[#4a7a60] text-white text-[10px] px-4 py-1 rounded-sm uppercase tracking-widest border border-[#5d8e62] shadow-sm">
                  Standard Annual
                </div>
                <div className="flex items-center justify-center mb-0 mt-2">
                  <span className="text-3xl font-bold align-top mt-2 opacity-90">
                    $
                  </span>
                  <span className="text-6xl font-semibold">499</span>
                  <span className="text-2xl font-light opacity-90 ml-1">
                    /year
                  </span>
                </div>
                <p className="text-[10px] font-light opacity-80 uppercase tracking-widest mt-1">
                  (Quarterly Visits)
                </p>
              </div>
              <div className="p-8 w-full flex flex-col items-center">
                <div className="text-center mb-6">
                  <p className="text-[#3a6948] font-bold text-xl tracking-wide -mt-2">
                    Save over <span className="text-[#2d5c3b]">$200</span>
                    <br />
                    <span className="text-sm font-normal text-gray-500">
                      in Your First Year!
                    </span>
                  </p>
                </div>
                <ul className="w-full space-y-3 mb-6">
                  <CheckItem text="Quarterly Visits (4/yr)" />
                  <CheckItem text="First 4 Filters Included FREE" highlight />
                  <CheckItem text="Air Report Each Visit" />
                </ul>
                <a
                  href="#annual"
                  className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2.5 text-center rounded-md shadow-md transition-all font-semibold text-sm mb-3"
                  id="btn-annual-card"
                >
                  Choose Annual →
                </a>
                <p className="text-center text-xs text-gray-400 font-medium">
                  $99 Setup Fee Waived
                </p>
              </div>
            </div>

            {/* Card 3: Elite */}
            <div
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center relative"
              id="card-elite"
            >
              <div className="absolute -top-4 flex items-center gap-2 bg-yellow-50 px-4 py-0.5 rounded-sm shadow-sm border border-gray-100">
                <span className="text-lg">👑</span>
                <span className="text-[#b99855] text-sm font-bold uppercase tracking-wide">
                  Elite Air Care
                </span>
              </div>
              <div className="flex items-center justify-center text-[#1e3a8a] mb-1 mt-4">
                <span className="text-3xl font-bold align-top mt-2">$</span>
                <span className="text-5xl font-semibold">899</span>
                <span className="text-2xl text-gray-500 ml-1">/year</span>
              </div>
              <div className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-px w-full mb-6 mt-6" />
              <ul className="w-full space-y-4 mb-8">
                <CheckItem text="Monthly Visits (12/yr)" />
                <CheckItem text="First 4 Filters Included" />
                <CheckItem text="Sunday Access & Priority Scheduling" />
                <CheckItem text="Advanced System Inspection" />
              </ul>
              <a
                href="#elite"
                className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2.5 text-center rounded-md shadow-md transition-all font-semibold text-sm"
                id="btn-elite-card"
              >
                Choose Premium
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 max-w-full mt-12">
            All plans include free setup + first 4 MERV-rated filters only with
            annual subscriptions. Additional filters billed as needed.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="text-sm font-semibold text-[#1e3a8a] hover:text-[#0f2347] hover:underline transition-colors"
            id="footer-call"
          >
            Questions? Call Us →
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#chat"
            className="text-sm font-semibold text-[#1e3a8a] hover:text-[#0f2347] hover:underline transition-colors"
            id="footer-chat"
          >
            Chat with Us →
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ── CheckItem component ── */
function CheckItem({
  text,
  highlight = false,
}: {
  text: string;
  highlight?: boolean;
}) {
  const renderText = () => {
    if (!highlight) return <span>{text}</span>;
    const parts = text.split("FREE");
    return (
      <span>
        {parts[0]}
        <span className="font-bold text-[#2d8653]">FREE</span>
        {parts[1]}
      </span>
    );
  };

  return (
    <li className="flex items-start gap-3 text-sm font-medium text-gray-600 leading-snug">
      <svg
        viewBox="0 0 20 20"
        fill="#2b9f4a"
        width="16"
        height="16"
        className="flex-shrink-0 mt-0.5"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {renderText()}
    </li>
  );
}
