"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* ── NAVBAR ── */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <div className={styles.navLogo}>
            <Image
              src="/logo.jpeg"
              alt="FilterFresh Logo"
              width={150}
              height={48}
              className={styles.logoImg}
              priority
            />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about" id="nav-about">
                About
              </a>
            </li>
            <li>
              <a href="#how-it-works" id="nav-how">
                How It Works
              </a>
            </li>
            <li>
              <a href="#pricing" className={styles.navActive} id="nav-pricing">
                Pricing
              </a>
            </li>
            <li>
              <a href="#service-area" id="nav-service">
                Service Area
              </a>
            </li>
            <li>
              <a href="#contact" id="nav-contact">
                Contact
              </a>
            </li>
          </ul>
          <button
            className={styles.hamburger}
            aria-label="Open menu"
            id="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[66px] left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 md:hidden z-50">
            <a
              href="#about"
              className="text-gray-600 font-medium hover:text-[#1e3a8a] text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 font-medium hover:text-[#1e3a8a] text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-[#2d8653] font-bold hover:text-[#246b42] text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#service-area"
              className="text-gray-600 font-medium hover:text-[#1e3a8a] text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Area
            </a>
            <a
              href="#contact"
              className="text-gray-600 font-medium hover:text-[#1e3a8a] text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <section
        className="w-full pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-white via-white to-gray-50"
        id="pricing"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-7">
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#2d8653] bg-[#2d8653]/10 px-3 py-1 rounded-full">
                Indoor Air Quality
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-[#1e3a8a] leading-tight">
                Your Home’s Air May Be 2–5x More Polluted Than Outside
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                Americans spend 90% of their time indoors. When your HVAC filter is dirty, it doesn’t just stop working. It recirculates dust, pet dander, pollen, mold spores, and fine particles into the air your family breathes every single day.
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                If you have pets, allergies, asthma, or children, your filter is not optional maintenance. It is your home’s first line of defense.
              </p>

              <div className="mt-7 md:mt-8">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white px-7 py-3.5 rounded-md shadow-md transition-all font-semibold"
                  id="btn-hero-protect"
                >
                  Protect My Air Now
                </a>
                <p className="mt-3 text-sm text-gray-600">
                  Professional filter replacement. On schedule. Clean the air you breathe.
                </p>

                <a
                  href="#pricing-options"
                  className="mt-3 inline-block text-sm font-medium text-[#1e4a7e] hover:text-[#153a63]"
                  id="link-hero-see-options"
                >
                  See plan options
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 md:p-7 shadow-[0_8px_30px_rgba(17,24,39,0.08)]">
                <p className="text-sm font-semibold text-[#1e3a8a] tracking-wide uppercase">
                  Impact
                </p>
                <p className="mt-2 text-gray-900 font-semibold text-lg">A clogged air filter can:</p>
                <ul className="mt-4 space-y-2.5 text-gray-700">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                    <span>Circulate airborne allergens throughout your home</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                    <span>Trigger or worsen allergy and asthma symptoms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                    <span>Restrict airflow and strain your HVAC system</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                    <span>Increase indoor particulate levels</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d8653] flex-shrink-0" />
                    <span>Lower overall indoor air quality</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="text-gray-800 font-semibold">Most homeowners forget to change their filter.</p>
                  <p className="text-gray-800 font-semibold">Most families are breathing the consequences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section
        className="bg-gray-50 border-b-[1px] border-gray-400 w-full pt-24 pb-0 md:py-20"
        id="pricing-options"
      >
        <div className="max-w-full mx-auto px-5 md:px-12 flex flex-row md:flex-row items-center md:items-start relative">
          {/* Left: text + card */}
          <div className="w-full text-left md:w-1/2 z-10 flex flex-col items-center md:items-start md:text-left">
            <h1 className="text-xl md:text-5xl font-semibold text-primary mb-2 md:mb-10 w-full md:whitespace-nowrap absolute top-0 left-0 z-10 ml-4">
              Choose Your Air Care Plan
            </h1>

            <div
              className="bg-white border-[1px] border-gray-400 text-left mt-2 rounded-md shadow-lg p-6 w-full max-w-3xl flex flex-col relative z-20"
              style={{
                maskImage:
                  "linear-gradient(to right, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 80%, transparent 100%)",
              }}
            >
              <p className="text-md font-semibold text-primary">
                Standard Monthly
              </p>
              <div className="flex items-baseline">
                <span className="text-xl font-semibold text-primary">$</span>
                <span className="text-2xl font-semibold text-primary mx-1">
                  49
                </span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">+ $99 setup fee *</p>
              <a
                href="#monthly"
                className="inline-block w-auto bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2 text-center rounded-md shadow-md transition-all"
                id="btn-hero-monthly"
              >
                Choose Monthly
              </a>
            </div>
          </div>

          {/* Right: worker photo */}
          {/* On mobile, we position him behind or below?
              The image shows him clearly on the right.
              For mobile, let's put him at the bottom, overlapping maybe, or just stacked.
              To match "like this" (desktop image) on mobile, stacking is best.
          */}
          <div className="w-full md:w-1/2 md:mt-20 md:flex items-end justify-end md:justify-end -mr-12 md:-mr-12">
            <div className="relative w-26 h-64 md:w-[450px] md:h-[550px] ">
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
      {/* ── PLANS SECTION ── */}
      <section
        className="py-16 relative"
        id="plans"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #f9fafb 10%, rgba(249, 250, 251, 0.8) 40%, rgba(249, 250, 251, 0.4) 100%), url('/bg-kitchen.png')",
          backgroundPosition: "top, bottom center",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-center text-2xl font-semibold text-[#1e3a8a] mb-12">
            Choose Your Air Care Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* ── Card 1: Monthly ── */}
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
                <span className="text-3xl text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-md text-gray-500 mb-6">+ $99 setup fee *</p>
              <div className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-[1px] w-full mb-6"></div>
              <ul className="w-full space-y-3 mb-8">
                <CheckItem text="Quarterly Visits (4/yr)" />
                <CheckItem text="First 2 Filters Included" />
                <CheckItem text="Air Report Each Visit" />
                <CheckItem text="$99 Setup required" />
              </ul>
              <a
                href="#monthly"
                className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2 text-center rounded-md shadow-md transition-all"
                id="btn-monthly-card"
              >
                Choose Monthly
              </a>
            </div>

            {/* ── Card 2: Annual Featured ── */}
            {/* ── Card 2: Annual Featured ── */}
            <div
              className="bg-white rounded-xl shadow-2xl border border-gray-100 transform md:-translate-y-4 relative z-10 flex flex-col items-center"
              id="card-annual"
            >
              {/* Green Header Section with Image/Gradient */}
              <div
                className="w-full rounded-t-lg relative flex flex-col items-center justify-center text-white py-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56, 102, 75, 0.85) 0%, rgba(108, 163, 116, 0.65) 100%), url('/bg-kitchen.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -top-3 bg-[#4a7a60] text-white text-xs px-4 py-1 rounded-sm uppercase tracking-wide border border-[#5d8e62] shadow-sm">
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
                <p className="text-sm font-light opacity-80 uppercase tracking-widest text-[10px] mt-1">
                  (Quarterly Visits)
                </p>
              </div>

              <div className="p-8 w-full flex flex-col items-center">
                {/* Savings Text */}
                <div className="text-center mb-6">
                  <p className="text-[#3a6948] font-bold text-xl tracking-wide -mt-4">
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
                  className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2 text-center rounded-md shadow-md transition-all mb-4"
                  id="btn-annual-card"
                >
                  Choose Annual &gt;
                </a>
                <p className="text-center text-xs text-gray-400 font-medium">
                  $99 Setup Fee Waived
                </p>
              </div>
            </div>

            {/* ── Card 3: Elite ── */}
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
                <span className="text-3xl text-gray-500 ml-1">/year</span>
              </div>
              <div className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-[1px] w-full mb-6 mt-6"></div>

              <ul className="w-full space-y-4 mb-8 pl-2">
                <CheckItem text="Monthly Visits (12/yr)" />
                <CheckItem text="First 4 Filters Included" />
                <CheckItem text="Sunday Access & Priority Scheduling" />
                <CheckItem text="Advanced System Inspection" />
              </ul>

              <a
                href="#elite"
                className="w-full bg-gradient-to-r from-[#1e4a7e] to-[#4c8bd1] hover:from-[#153a63] hover:to-[#3a75b8] text-white py-2 text-center rounded-md shadow-md transition-all"
                id="btn-elite-card"
              >
                Choose Premium
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 max-w-full mt-12">
            All plans include free setup + first 4 MERV-rated filters only with
            annual subscriptions. Additional filters billed as needed (#
            &gt;2/visit).
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="text-sm font-semibold text-[#1e3a8a] transition-colors hover:text-[#0f2347] hover:underline"
            id="footer-call"
          >
            Questions? Call Us →
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#chat"
            className="text-sm font-semibold text-[#1e3a8a] transition-colors hover:text-[#0f2347] hover:underline"
            id="footer-chat"
          >
            Chat with Us →
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ── Reusable components ── */
function CheckItem({
  text,
  white = false,
  gold = false,
  highlight = false,
}: {
  text: string;
  white?: boolean;
  gold?: boolean;
  highlight?: boolean;
}) {
  const color = gold ? "#e8a820" : white ? "rgba(255,255,255,0.9)" : "#2b9f4a";

  // If highlight=true, render "FREE" in a distinct color
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
        fill={color}
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
