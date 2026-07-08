import { appLinks } from "../data.js";

function StoreBadge({ store }) {
  return (
    <a
      href={store.available ? store.url : undefined}
      className={`store-badge ${!store.available ? "store-badge--soon" : ""}`}
      aria-disabled={!store.available}
      onClick={(e) => {
        if (!store.available) e.preventDefault();
      }}
    >
      <span className="store-badge__label">{store.available ? "Download on the" : "Coming soon to the"}</span>
      <span className="store-badge__name">{store.label}</span>
    </a>
  );
}

export default function Download() {
  return (
    <section id="download" className="section download">
      <div className="container download__inner">
        <h2 className="section-heading">Grab your phone. Start skating.</h2>
        <p className="section-lede">Catch Skate is launching soon. Here's where to find it.</p>

        <div className="download__badges">
          <StoreBadge store={appLinks.appStore} />
          <StoreBadge store={appLinks.googlePlay} />
        </div>
      </div>

      <style>{`
        .download__badges {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .store-badge {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1.5px solid var(--line);
          border-radius: 12px;
          padding: 10px 22px;
          min-width: 200px;
        }
        .store-badge__label {
          font-size: 11px;
          color: var(--chalk-faint);
        }
        .store-badge__name {
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          letter-spacing: 0.02em;
        }
        .store-badge--soon {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .store-badge:not(.store-badge--soon):hover {
          border-color: var(--caution);
        }
      `}</style>
    </section>
  );
}
