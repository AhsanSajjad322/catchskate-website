import { Link } from "react-router-dom";
import { appInfo, legalLinks } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="/logo.png" alt="" className="site-footer__logo-img" />
          <span>{appInfo.name}</span>
        </div>

        <nav className="site-footer__legal" aria-label="Legal">
          <a href={legalLinks.terms}>Terms of Use</a>
          <a href={legalLinks.privacy}>Privacy Policy</a>
          <Link to={legalLinks.deleteAccount}>Delete Account</Link>
        </nav>

        <p className="site-footer__copy">
          &copy; {year} {appInfo.name}. All rights reserved.
        </p>
      </div>

      <style>{`
        .site-footer {
          padding: 40px 0;
        }
        .site-footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .site-footer__brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Anton', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
        }
        .site-footer__logo-img {
          height: 22px;
          width: auto;
        }
        .site-footer__legal {
          display: flex;
          gap: 24px;
          font-size: 13px;
          font-weight: 600;
          color: var(--chalk-dim);
        }
        .site-footer__legal a:hover {
          color: var(--caution);
        }
        .site-footer__copy {
          font-size: 12.5px;
          color: var(--chalk-faint);
          margin: 0;
        }
      `}</style>
    </footer>
  );
}
