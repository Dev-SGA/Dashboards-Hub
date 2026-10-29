import { Athlete, clubInitials } from "@/lib/athletes";

export function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <a
      className="card"
      href={athlete.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card__photo-wrap">
        <img className="card__photo" src={athlete.photo} alt={athlete.name} />
      </div>
      <div className="card__body">
        <div className="card__info">
          <h2 className="card__name">{athlete.name}</h2>
          <p className="card__club">{athlete.club}</p>
        </div>
        {athlete.clubLogo ? (
          <img
            className="card__club-logo"
            src={athlete.clubLogo}
            alt={athlete.club}
          />
        ) : (
          <span className="card__club-crest">{clubInitials(athlete.club)}</span>
        )}
      </div>
      <span className="card__cta">Open dashboard →</span>
    </a>
  );
}
