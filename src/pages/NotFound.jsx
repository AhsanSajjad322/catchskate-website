import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This trick hasn't landed. The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>

      <style>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-align: center;
          padding: 24px;
        }
        .not-found h1 {
          font-size: 96px;
          color: var(--caution);
        }
      `}</style>
    </div>
  );
}
