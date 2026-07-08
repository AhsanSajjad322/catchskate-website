const steps = [
  {
    title: "Know your phone",
    body: "The top of your phone is the nose. The left and right edges are the rails. Every trick is built from those two moves.",
  },
  {
    title: "Spin and flip",
    body: "Land a trick by spinning the nose clockwise or counterclockwise, flipping the left rail up, or flipping the right rail up — or by combining them.",
  },
  {
    title: "Tracked by gyroscope",
    body: "Catch Skate reads your phone's built-in gyroscope to detect exactly which trick you landed, in real time.",
  },
  {
    title: "Play SKATE with friends",
    body: "Borrowed straight from basketball's HORSE: one player sets a trick, the next player has to land it. Miss it, take a letter. Spell SKATE, you're out.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="section-heading">Your phone already knows how to skate.</h2>
        <p className="section-lede">
          Catch Skate turns everyday phone-flipping into a full trick system — no board, no bruises, no drained battery on repeat drops.
        </p>

        <ol className="how-it-works__grid">
          {steps.map((step, i) => (
            <li key={step.title} className="how-it-works__card">
              <span className="how-it-works__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="how-it-works__title">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .how-it-works__grid {
          list-style: none;
          margin: 56px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .how-it-works__card {
          background: var(--asphalt-2);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px 22px;
        }
        .how-it-works__index {
          display: block;
          font-family: 'Anton', sans-serif;
          font-size: 15px;
          color: var(--caution);
          margin-bottom: 14px;
        }
        .how-it-works__title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .how-it-works__card p {
          font-size: 14.5px;
          margin-bottom: 0;
        }
        @media (max-width: 940px) {
          .how-it-works__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .how-it-works__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
