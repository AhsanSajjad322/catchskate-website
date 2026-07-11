import { appInfo, appLinks } from "../data.js";
import TrickCompass from "./TrickCompass.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="grip-texture hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Now on iOS &amp; Android</span>
          <h1 className="hero__title">
            {appInfo.name.split(" ")[0]}
            <br />
            {appInfo.name.split(" ").slice(1).join(" ")}
          </h1>
          <p className="hero__tagline">{appInfo.tagline}</p>
          <p className="hero__description">{appInfo.shortDescription}</p>

          <div className="hero__actions">
            <a href="#download" className="btn btn-primary">
              Download the app
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <TrickCompass />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 72px 0 96px;
          overflow: hidden;
        }
        .hero__texture {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero__inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(48px, 8vw, 88px);
          margin: 10px 0 6px;
        }
        .hero__tagline {
          color: var(--caution);
          font-weight: 700;
          font-size: 19px;
          margin-bottom: 18px;
        }
        .hero__description {
          font-size: 16.5px;
          max-width: 480px;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .hero__visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero__visual {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
