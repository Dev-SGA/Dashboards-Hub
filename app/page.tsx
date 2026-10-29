import { AthleteCard } from "@/components/AthleteCard";
import { BRAND } from "@/lib/brand";
import { ATHLETES } from "@/lib/athletes";

export default function HubPage() {
  return (
    <main className="hub">
      <header className="hub__header">
        <img
          className="hub__logo"
          src={BRAND.logos.horizontal}
          alt={BRAND.name}
        />
        <div className="hub__heading">
          <h1 className="hub__title">Dashboards Hub</h1>
          <p className="hub__subtitle">
            Athlete performance reports · {BRAND.slogan}
          </p>
        </div>
      </header>

      <section className="hub__grid">
        {ATHLETES.map((athlete) => (
          <AthleteCard key={athlete.url} athlete={athlete} />
        ))}
      </section>

      <footer className="hub__footer">
        <span>{BRAND.legal}</span>
      </footer>
    </main>
  );
}
