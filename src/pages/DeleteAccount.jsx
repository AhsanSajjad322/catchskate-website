import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { contact } from "../data.js";

export default function DeleteAccount() {
  return (
    <>
      <Header />
      <main>
        <section className="section delete-account">
          <div className="container delete-account__inner">
            <span className="eyebrow">Account &amp; data</span>
            <h1 className="section-heading">Delete your account</h1>
            <p className="section-lede">
              We're sorry to see you go. To request deletion of your Catch Skate account and
              all associated data, send us an email and we'll take care of it.
            </p>

            <div className="delete-account__card">
              <p className="delete-account__step">
                Email <a href={`mailto:${contact.email}`}>{contact.email}</a> with the subject
                line "Delete My Account," using the same email address you used to sign up.
              </p>
              <p className="delete-account__step">
                Once we verify your request, your profile, trick history, scores, and
                leaderboard entries will be permanently deleted from our servers.
              </p>
              <p className="delete-account__note">
                You can also request deletion directly from the app: go to{" "}
                <strong>Options → Delete Account</strong>.
              </p>
            </div>

            <Link to="/" className="btn btn-outline delete-account__back">
              ← Back to Catch Skate
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .delete-account__inner {
          max-width: 640px;
        }
        .delete-account__card {
          background: var(--asphalt-2);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px 26px;
          margin: 32px 0;
        }
        .delete-account__step {
          font-size: 15.5px;
          margin-bottom: 16px;
        }
        .delete-account__step:last-of-type {
          margin-bottom: 0;
        }
        .delete-account__note {
          font-size: 13.5px;
          color: var(--chalk-faint);
          margin: 20px 0 0;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }
        .delete-account__back {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}
