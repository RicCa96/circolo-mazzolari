import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { mainActivities } from "@/lib/activities";

export default function HomePage() {
  return (
      <>
        <section className="border-b bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  Vezzano sul Crostolo (RE) • Comunità • Volontariato
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl leading-[1.1]">
                  Benvenuti al Circolo ANSPI Don Primo Mazzolari
                </h1>

                <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                  Crescere insieme attraverso lo sport, la cultura e l&apos;amicizia.
                  Siamo un&apos;Associazione di Promozione Sociale (APS) iscritta al RUNTS,
                  punto di riferimento per la comunità di Vezzano sul Crostolo.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                      href="/attivita"
                      className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Scopri le attività
                  </Link>
                  <Link
                      href="/about"
                      className="rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-all"
                  >
                    Chi siamo
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-2xl relative overflow-hidden dark:bg-neutral-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">Prossimi Eventi</div>
                <ul className="mt-6 space-y-4 relative z-10">
                  {[
                    {
                      date: "Sabato 15 Febbraio 2026",
                      title: "Torneo di Calcetto Invernale",
                      description: "Grande torneo per ragazzi e adulti. Iscrizioni aperte fino al 10 febbraio!",
                    },
                    {
                      date: "Domenica 23 Febbraio 2026",
                      title: "Festa di Carnevale",
                      description: "Pomeriggio in maschera con giochi, musica e merenda per tutti. Ingresso libero.",
                    },
                    {
                      date: "Sabato 8 Marzo 2026",
                      title: "Gita al Parco Avventura",
                      description: "Giornata all'aria aperta per famiglie e ragazzi. Prenotazione obbligatoria.",
                    },
                  ].map((e, i) => (
                      <li key={i} className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-secondary/50 transition-all hover:bg-white/10">
                        <div className="text-xs font-bold text-secondary uppercase tracking-wider">{e.date}</div>
                        <div className="mt-1 font-bold text-white text-lg">{e.title}</div>
                        <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{e.description}</p>
                      </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl bg-primary/20 border border-primary/30 p-5">
                  <div className="text-sm font-bold text-white">Vuoi partecipare?</div>
                  <p className="mt-2 text-sm text-blue-50">
                    Contattaci per dare una mano come volontario o per iscrivere i ragazzi alle attività.
                  </p>
                  <p className="mt-3 text-sm font-bold text-secondary">Email: vezzano@anspi.re.it</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <SectionTitle
                kicker="I nostri valori"
                title="Crescere insieme attraverso lo sport, la cultura e l'amicizia."
                subtitle="Operiamo secondo i valori cristiani di solidarietà, accoglienza e formazione integrale della persona."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Inclusione",
                  text: "Tutti sono benvenuti nel nostro circolo, senza distinzioni. Crediamo nella valorizzazione di ogni persona.",
                  icon: "🤝",
                },
                {
                  title: "Educazione",
                  text: "Lo sport non è solo competizione, ma uno strumento educativo per sviluppare disciplina e spirito di squadra.",
                  icon: "⚽",
                },
                {
                  title: "Socialità",
                  text: "Creare legami, costruire amicizie e rafforzare la comunità sono al centro della nostra missione quotidiana.",
                  icon: "🎉",
                },
                {
                  title: "Rispetto",
                  text: "Promuoviamo relazioni basate sull'ascolto, sulla comprensione e sulla valorizzazione reciproca.",
                  icon: "💙",
                },
                {
                  title: "Comunità",
                  text: "Siamo parte attiva del territorio di Vezzano sul Crostolo, contribuendo al bene comune.",
                  icon: "🏘️",
                },
                {
                    title: "Solidarietà",
                    text: "Perseguiamo finalità civiche e solidaristiche come Ente del Terzo Settore.",
                    icon: "🌟",
                }
              ].map((c) => (
                  <div key={c.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="text-3xl mb-4">{c.icon}</div>
                    <div className="text-xl font-bold text-primary">{c.title}</div>
                    <p className="mt-4 text-neutral-900 leading-relaxed dark:text-neutral-100">{c.text}</p>
                  </div>
              ))}
            </div>
          </Container>
        </section>
      </>
  );
}
