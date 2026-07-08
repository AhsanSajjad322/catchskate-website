export default function Safety() {
  return (
    <section className="section safety">
      <div className="container safety__inner">
        <div className="safety__badge" aria-hidden="true">!</div>
        <div>
          <h2 className="safety__title">Play safe, every time.</h2>
          <p className="safety__body">
            Always play in a safe spot — never put yourself, the people around you, or your phone at risk.
            Play low, over your lap, on a soft surface like a couch cushion or grass. Catch Skate isn't
            responsible for any damage that happens while playing.
          </p>
        </div>
      </div>

      <style>{`
        .safety {
          background: var(--asphalt-2);
        }
        .safety__inner {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .safety__badge {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--hazard-red);
          color: var(--chalk);
          font-family: 'Anton', sans-serif;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .safety__title {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .safety__body {
          max-width: 640px;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}
