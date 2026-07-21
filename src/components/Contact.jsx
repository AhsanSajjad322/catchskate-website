import { socials, contact } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-heading">Say hi, or send a clip.</h2>

          <dl className="contact__details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {contact.address.city}, {contact.address.state} {contact.address.zip}
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact__socials">
          <span className="eyebrow">Follow along</span>
          <ul>
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  <span className="contact__social-label">{social.label}</span>
                  <span className="contact__social-handle">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .contact__inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
        }
        .contact__details {
          margin: 32px 0 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .contact__details dt {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--chalk-faint);
          margin-bottom: 4px;
        }
        .contact__details dd {
          margin: 0;
          font-size: 16px;
        }
        .contact__details a:hover {
          color: var(--caution);
        }
        .contact__socials ul {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .contact__socials a {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          letter-spacing: 0.01em;
        }
        .contact__socials a:hover {
          color: var(--caution);
        }
        .contact__social-handle {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--chalk-faint);
        }
        @media (max-width: 760px) {
          .contact__inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
