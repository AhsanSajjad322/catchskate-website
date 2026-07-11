import { appInfo, appLinks } from "../data.js";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          <img src="/logo.png" alt="" className="site-header__logo-img" />
          <span>{appInfo.name}</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={appLinks.appStore.available ? appLinks.appStore.url : "#download"}
          className="btn btn-primary site-header__cta"
        >
          Get the app
        </a>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(28, 28, 30, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .site-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 16px;
          padding-bottom: 16px;
        }
        .site-header__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .site-header__logo-img {
          height: 36px;
          width: auto;
        }
        .site-header__nav {
          display: flex;
          gap: 28px;
          font-size: 14px;
          font-weight: 600;
          color: var(--chalk-dim);
        }
        .site-header__nav a:hover {
          color: var(--caution);
        }
        .site-header__cta {
          padding: 10px 20px;
          font-size: 13px;
        }
        @media (max-width: 720px) {
          .site-header__nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
