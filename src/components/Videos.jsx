import { videos, getYouTubeId } from "../data.js";

function VideoCard({ video }) {
  const youtubeId = video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : null;

  return (
    <article className="video-card">
      <div className="video-card__frame">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="video-card__placeholder">
            <img src="/logo.png" alt="" className="video-card__placeholder-logo" />
            <span>Coming soon</span>
          </div>
        )}
      </div>
      <h3 className="video-card__title">{video.title}</h3>
      <p className="video-card__desc">{video.description}</p>
    </article>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="section videos">
      <div className="container">
        <span className="eyebrow">Watch &amp; learn</span>
        <h2 className="section-heading">See it before you flip it.</h2>
        <p className="section-lede">
          Three short videos to get you from curious to landing tricks.
        </p>

        <div className="videos__grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      <style>{`
        .videos__grid {
          margin-top: 56px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .video-card__frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--asphalt-2);
          border: 1px solid var(--line);
        }
        .video-card__frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .video-card__placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .video-card__placeholder-logo {
          height: 44px;
          width: auto;
          opacity: 0.5;
        }
        .video-card__placeholder span {
          font-family: 'Anton', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--chalk-faint);
        }
        .video-card__title {
          font-size: 17px;
          margin: 18px 0 8px;
        }
        .video-card__desc {
          font-size: 14px;
          margin-bottom: 0;
        }
        @media (max-width: 940px) {
          .videos__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
