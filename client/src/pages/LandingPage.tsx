const services = [
  {
    title: "Klassisk klipp",
    price: "450,-",
    duration: "45 min",
    description: "Stram, tidløs og presis klipp tilpasset ansiktsformen din.",
  },
  {
    title: "Skin fade + skjegg",
    price: "590,-",
    duration: "60 min",
    description:
      "Høy detaljfokus med fade, konturer og skjeggform som sitter hele uka.",
  },
  {
    title: "Premium pakke",
    price: "790,-",
    duration: "75 min",
    description: "Helhetsopplevelse med varm håndduk og styling.",
  },
];

const steps = [
  {
    title: "Velg stil",
    text: "Fortell oss om looken du vil ha, eller la oss anbefale.",
  },
  {
    title: "Book tid",
    text: "Velg tidspunktet som passer deg, vi holder det enkelt.",
  },
  {
    title: "Nyt opplevelsen",
    text: "Len deg tilbake, vi tar hånd om detaljene.",
  },
];

const testimonials = [
  {
    quote:
      "Beste fade i byen. Følte meg som ny etter besøket, og booking var superenkel.",
    name: "Amir K.",
  },
  {
    quote:
      "Skjeggformen sitter perfekt, og atmosfæren er rolig og profesjonell.",
    name: "Jonas L.",
  },
  {
    quote: "Topp service og presise klipp. Kommer tilbake hver måned.",
    name: "Mats R.",
  },
];

export function LandingPage() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <p className="hero-kicker">Premium barberopplevelse i Oslo</p>
            <h1>Skreddersydde klipp som matcher stilen din.</h1>
            <p className="hero-subtitle">
              Book en time hos Nordic Fade Studio og få presis klipp, skarp
              finish og en rolig pause i hverdagen.
            </p>
            <div className="hero-actions">
              <button className="button">Book time</button>
              <button className="button button-ghost">Se priser</button>
            </div>
          </div>
          <div className="hero-card">
            <div>
              <h3>Åpent i dag</h3>
              <p>10:00–19:00</p>
            </div>
            <div>
              <h3>Neste ledige</h3>
              <p>12:30</p>
            </div>
            <div>
              <h3>Vurdering</h3>
              <p>4.9 ★ (230+)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <p>Populære tjenester</p>
            <h2>Velg pakken som passer deg</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="card-header">
                  <h3>{service.title}</h3>
                  <span className="pill">{service.duration}</span>
                </div>
                <p>{service.description}</p>
                <div className="card-footer">
                  <strong>{service.price}</strong>
                  <button className="button button-secondary">Book</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="container split">
          <div>
            <h2>En helhetlig opplevelse</h2>
            <p>
              Hos oss handler det om mer enn klipp. Vi gir deg tid, fokus og en
              opplevelse som føles både luksuriøs og personlig.
            </p>
            <ul className="checklist">
              <li>Individuell konsultasjon før hver time</li>
              <li>Rene verktøy og tydelige hygienerutiner</li>
              <li>Stylingtips tilpasset hårtypen din</li>
            </ul>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <p>Kundene våre</p>
            <h2>Hva folk sier</h2>
          </div>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <article className="card" key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <div>
            <h2>Få din beste fade denne uka</h2>
            <p>
              Tidene fylles raskt. Reserver din plass og få en klipp som matcher
              personligheten din.
            </p>
          </div>
          <button className="button">Reserver nå</button>
        </div>
      </section>
    </div>
  );
}
