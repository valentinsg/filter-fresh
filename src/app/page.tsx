"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero} id="pricing">
        <div className={styles.heroInner}>
          {/* Left: text + card */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Choose Your Air Care Plan</h1>
            <div className={styles.heroPlanCard}>
              <p className={styles.heroPlanLabel}>Standard Monthly</p>
              <div className={styles.heroPriceRow}>
                <span className={styles.heroCurrency}>$</span>
                <span className={styles.heroAmount}>49</span>
                <span className={styles.heroPeriod}>/month</span>
              </div>
              <p className={styles.heroPlanNote}>+ $99 setup fee</p>
              <a
                href="#monthly"
                className={styles.heroBtn}
                id="btn-hero-monthly"
              >
                Choose Monthly
              </a>
            </div>
          </div>

          {/* Right: worker photo */}
          <div className={styles.heroRight}>
            <div className={styles.workerFrame}>
              <Image
                src="/worker-without-background.png"
                alt="FilterFresh technician"
                fill
                className={styles.workerImg}
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                  marginTop: "120px",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS SECTION ── */}
      <section className={styles.plans} id="plans">
        <div className={styles.plansInner}>
          <h2 className={styles.plansTitle}>Choose Your Air Care Plan</h2>
          <div className={styles.plansGrid}>
            {/* ── Card 1: Monthly ── */}
            <div className={styles.card} id="card-monthly">
              <div className={styles.cardBody}>
                <div className={styles.popularBadge}>Most Popular!</div>
                <div className={styles.cardPrice}>
                  <span className={styles.cardCurrency}>$</span>
                  <span className={styles.cardAmount}>49</span>
                  <span className={styles.cardPeriod}>/month</span>
                </div>
                <p className={styles.cardNote}>+ $99 setup fee *</p>
                <ul className={styles.cardFeatures}>
                  <CheckItem text="Quarterly Visits (4/yr)" />
                  <CheckItem text="First 2 Filters Included" />
                  <CheckItem text="Air Report Each Visit" />
                  <CheckItem text="$99 Setup required" />
                </ul>
                <a
                  href="#monthly"
                  className={`${styles.cardBtn} ${styles.cardBtnBlue}`}
                  id="btn-monthly-card"
                >
                  Choose Monthly
                </a>
              </div>
            </div>

            {/* ── Card 2: Annual Featured ── */}
            <div
              className={`${styles.card} ${styles.cardFeatured}`}
              id="card-annual"
            >
              {/* Full-width teal header strip */}
              <div className={styles.featuredHeader}>
                <p className={styles.featuredLabel}>Standard Annual</p>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardPrice}>
                  <span className={styles.cardCurrency}>$</span>
                  <span className={styles.cardAmount}>499</span>
                  <span className={styles.cardPeriod}>/year</span>
                </div>
                <p className={styles.cardSubtitle}>(Quarterly Visits)</p>
                <div className={styles.cardSavings}>
                  <svg
                    viewBox="0 0 20 20"
                    width="16"
                    height="16"
                    style={{ flexShrink: 0, marginTop: "3px", fill: "#2563a8" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Save over $200
                    <br />
                    in Your First Year!
                  </span>
                </div>
                <ul className={styles.cardFeatures}>
                  <CheckItem text="Quarterly Visits (4/yr)" />
                  <CheckItem text="First 4 Filters Included FREE" highlight />
                  <CheckItem text="Air Report Each Visit" />
                </ul>
                <a
                  href="#annual"
                  className={`${styles.cardBtn} ${styles.cardBtnDarkBlue}`}
                  id="btn-annual-card"
                >
                  Choose Annual &gt;
                </a>
                <p className={styles.freeSetup}>$99 Setup Fee Waived</p>
              </div>
            </div>

            {/* ── Card 3: Elite ── */}
            <div
              className={`${styles.card} ${styles.cardElite}`}
              id="card-elite"
            >
              <div className={styles.cardBody}>
                <div className={styles.eliteHeader}>
                  <span className={styles.crownEmoji}>👑</span>
                  <p className={styles.eliteLabel}>Elite Air Care</p>
                </div>
                <div className={styles.cardPrice}>
                  <span className={styles.cardCurrency}>$</span>
                  <span className={styles.cardAmount}>899</span>
                  <span className={styles.cardPeriod}>/year</span>
                </div>
                <ul className={styles.cardFeatures}>
                  <CheckItem text="Monthly Visits (12/yr)" />
                  <CheckItem text="First 4 Filters Included" />
                  <CheckItem text="Sunday Access & Priority Scheduling" />
                  <CheckItem text="Advanced System Inspection" />
                </ul>
                <a
                  href="#elite"
                  className={`${styles.cardBtn} ${styles.cardBtnNavy}`}
                  id="btn-elite-card"
                >
                  Choose Premium
                </a>
              </div>
            </div>
          </div>
          <p className={styles.disclaimer}>
            All plans include free setup + first 4 MERV-rated filters only with
            annual subscriptions. Additional filters billed as needed (#
            &gt;2/visit).
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#contact" className={styles.footerLink} id="footer-call">
            Questions? Call Us →
          </a>
          <span className={styles.sep}>|</span>
          <a href="#chat" className={styles.footerLink} id="footer-chat">
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
        <span className={styles.highlightText}>FREE</span>
        {parts[1]}
      </span>
    );
  };

  return (
    <li className={styles.checkItem}>
      <svg
        viewBox="0 0 20 20"
        fill={color}
        width="15"
        height="15"
        style={{ flexShrink: 0, marginTop: "2px" }}
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
