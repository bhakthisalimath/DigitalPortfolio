"use client";

import { useCallback, useEffect } from "react";
import ContentCategorySection from "@/components/ContentCategorySection";
import { mediaAmbassadorCopy } from "@/data/mediaAmbassador";

const copy = mediaAmbassadorCopy;

export default function HomePage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

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
        <div className="hero-card">
          <div className="hero-avatar-floating">
            <img
              src="/avatar/me1.jpg?v=2"
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
              onClick={() => scrollTo("content-impact")}
            >
              Content Impact
            </button>
            <button
              type="button"
              className="section-cta"
              onClick={() => scrollTo("featured-reels")}
            >
              {copy.hero.cta.reels}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll-button"
          onClick={() => scrollTo("content-impact")}
          aria-label={copy.hero.arrowLabel}
        >
          <span className="hero-scroll-icon">↓</span>
        </button>
      </section>

      {/* ===== 1. Content Impact ===== */}
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

      {/* ===== 2. Japan OLE ===== */}
      <section
        id="japan-ole"
        className="home-section home-section--warm reveal-on-scroll"
      >
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

      {/* ===== 3. Featured Reels ===== */}
      <section
        id="featured-reels"
        className="home-section reveal-on-scroll"
      >
        <header className="home-section-header">
          <h2 className="home-section-title">Featured Reels & Content</h2>
          <p className="home-section-subtitle">
            Reels load with their Instagram preview — tap play on any reel to watch without leaving the site.
          </p>
        </header>

        <div className="content-categories">
          {copy.contentCategories.map((category) => (
            <ContentCategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* ===== 4. Content Process ===== */}
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
    </div>
  );
}
