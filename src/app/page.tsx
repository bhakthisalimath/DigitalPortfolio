"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ContentCategorySection from "@/components/ContentCategorySection";
import { mediaAmbassadorCopy } from "@/data/mediaAmbassador";

const copy = mediaAmbassadorCopy;

export default function HomePage() {
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailMenuRef = useRef<HTMLDivElement>(null);

  const emailLink = copy.contact.links.find((l) => l.label === "Email");
  const emailAddress = emailLink?.handle.startsWith("[insert")
    ? "bhakthisalimath@gmail.com"
    : emailLink?.handle ?? "bhakthisalimath@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const openGmail = useCallback(() => {
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    setEmailMenuOpen(false);
  }, [gmailComposeUrl]);

  const copyEmail = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress).then(() => {
        setEmailCopied(true);
        setEmailMenuOpen(false);
        setTimeout(() => setEmailCopied(false), 2000);
      });
    }
  }, [emailAddress]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emailMenuRef.current &&
        !emailMenuRef.current.contains(event.target as Node)
      ) {
        setEmailMenuOpen(false);
      }
    }
    if (emailMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [emailMenuOpen]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* ===== Hero ===== */}
      <section className="hero-section reveal-visible">
        <div className="hero-bg">
          <div className="hero-bg-orb hero-bg-orb--left" />
          <div className="hero-bg-orb hero-bg-orb--right" />
          <div className="hero-bg-orb hero-bg-orb--warm" />
          <div className="hero-bg-radial" />
          <div className="hero-bg-fade" />
        </div>

        <div className="hero-card">
          <div className="hero-avatar-floating">
            <img
              src="/avatar/me1.jpg"
              alt="Bhakthi Salimath"
              className="hero-avatar-floating-img"
            />
          </div>

          <header className="hero-header">
            <p className="hero-kicker">USyd OLE · Digital Media Ambassador</p>
            <h1 className="hero-title">{copy.hero.headline}</h1>
            <p className="hero-subheading">{copy.hero.subheading}</p>
          </header>

          <p className="hero-intro">{copy.hero.intro}</p>

          <div className="hero-cta-row">
            <button
              type="button"
              className="section-cta section-cta--primary"
              onClick={() => scrollTo("featured-reels")}
            >
              {copy.hero.cta.reels}
            </button>
            <button
              type="button"
              className="section-cta"
              onClick={() => scrollTo("scholarship-fit")}
            >
              {copy.hero.cta.experience}
            </button>
            <button
              type="button"
              className="section-cta"
              onClick={() => scrollTo("contact")}
            >
              {copy.hero.cta.contact}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll-button"
          onClick={() => scrollTo("scholarship-fit")}
          aria-label={copy.hero.arrowLabel}
        >
          <span className="hero-scroll-icon">↓</span>
        </button>
      </section>

      {/* ===== Scholarship Fit ===== */}
      <section
        id="scholarship-fit"
        className="home-section reveal-on-scroll"
      >
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.scholarshipFit.title}</h2>
          <p className="home-section-subtitle">
            {copy.scholarshipFit.subtitle}
          </p>
        </header>

        <div className="fit-grid">
          {copy.scholarshipFit.points.map((point) => (
            <div key={point.title} className="fit-card">
              <h3 className="fit-card-title">{point.title}</h3>
              <p className="fit-card-body">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured Reels ===== */}
      <section
        id="featured-reels"
        className="home-section reveal-on-scroll"
      >
        <header className="home-section-header">
          <h2 className="home-section-title">Featured Reels & Content</h2>
          <p className="home-section-subtitle">
            Selected short-form content — each card shows my role, platform, and
            impact. Add reel links in{" "}
            <code className="inline-code">mediaAmbassador.ts</code>.
          </p>
        </header>

        <div className="content-categories">
          {copy.contentCategories.map((category) => (
            <ContentCategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* ===== Content Impact ===== */}
      <section
        id="content-impact"
        className="home-section reveal-on-scroll"
      >
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.contentImpact.title}</h2>
          <p className="home-section-subtitle">
            {copy.contentImpact.subtitle}
          </p>
        </header>

        <div className="impact-grid">
          {copy.contentImpact.stats.map((stat) => (
            <div key={stat.label} className="impact-card">
              <p className="impact-card-value">{stat.value}</p>
              <p className="impact-card-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        <p className="impact-note">{copy.contentImpact.note}</p>
      </section>

      {/* ===== Content Process ===== */}
      <section
        id="content-process"
        className="home-section reveal-on-scroll"
      >
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.contentProcess.title}</h2>
          <p className="home-section-subtitle">
            {copy.contentProcess.subtitle}
          </p>
        </header>

        <div className="process-timeline">
          {copy.contentProcess.steps.map((step, index) => (
            <div key={step.title} className="process-step">
              <div className="process-step-marker">
                <span className="process-step-number">{step.step}</span>
                {index < copy.contentProcess.steps.length - 1 && (
                  <span className="process-step-line" aria-hidden="true" />
                )}
              </div>
              <div className="process-step-card">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Japan OLE ===== */}
      <section id="japan-ole" className="home-section home-section--warm reveal-on-scroll">
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.japanOle.title}</h2>
          <p className="home-section-subtitle">{copy.japanOle.subtitle}</p>
        </header>

        <p className="japan-intro">{copy.japanOle.intro}</p>

        <ul className="japan-topics">
          {copy.japanOle.topics.map((topic) => (
            <li key={topic} className="japan-topic">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="home-section reveal-on-scroll">
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.about.title}</h2>
          <p className="home-section-subtitle">{copy.about.subtitle}</p>
        </header>

        <div className="about-card">
          <div className="about-text">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <ul className="about-facts">
            {copy.about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="home-section reveal-on-scroll">
        <header className="home-section-header">
          <h2 className="home-section-title">{copy.contact.title}</h2>
          <p className="home-section-subtitle">{copy.contact.subtitle}</p>
        </header>

        <p className="contact-blurb">{copy.contact.blurb}</p>

        <div className="contact-links">
          {copy.contact.links.map((link) => {
            const isPlaceholder = link.href.startsWith("[insert");
            const isEmail = link.label === "Email";

            if (isEmail) {
              return (
                <div key={link.label} ref={emailMenuRef} className="hero-email-wrap">
                  <button
                    type="button"
                    onClick={() => setEmailMenuOpen((open) => !open)}
                    className="contact-link-pill"
                    aria-label="Email options"
                    aria-expanded={emailMenuOpen}
                    aria-haspopup="true"
                  >
                    {link.icon && (
                      <img
                        src={link.icon}
                        alt=""
                        className="hero-social-icon"
                        aria-hidden
                      />
                    )}
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-handle">{link.handle}</span>
                  </button>
                  {emailMenuOpen && (
                    <div
                      className="hero-email-menu"
                      role="menu"
                      aria-label="Email options"
                    >
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        role="menuitem"
                        className="hero-email-menu-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openGmail();
                        }}
                      >
                        Open in Gmail
                      </a>
                      <button
                        type="button"
                        role="menuitem"
                        className="hero-email-menu-item"
                        onClick={copyEmail}
                      >
                        {emailCopied ? "Copied!" : "Copy email address"}
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            if (isPlaceholder) {
              return (
                <div key={link.label} className="contact-link-pill contact-link-pill--placeholder">
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt=""
                      className="hero-social-icon"
                      aria-hidden
                    />
                  )}
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-handle">{link.handle}</span>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link-pill"
              >
                {link.icon && (
                  <img
                    src={link.icon}
                    alt=""
                    className="hero-social-icon"
                    aria-hidden
                  />
                )}
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-handle">{link.handle}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
