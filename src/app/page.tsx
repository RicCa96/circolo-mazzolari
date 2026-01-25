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
                  Un circolo per stare insieme, crescere e fare comunità.
                </h1>

                <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                  Il Circolo ANSPI Don Primo Mazzolari promuove iniziative sociali, educative, sportive e ricreative,
                  con il contributo di tanti volontari.
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
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">In evidenza</div>
                <ul className="mt-6 space-y-4 relative z-10">
                  {mainActivities.map((a) => (
                      <li key={a.slug} className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-secondary/50 transition-all hover:bg-white/10">
                        <div className="text-xs font-bold text-secondary uppercase tracking-wider">{a.tag}</div>
                        <div className="mt-1 font-bold text-white text-lg">{a.title}</div>
                        <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{a.description}</p>
                      </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl bg-primary/20 border border-primary/30 p-5">
                  <div className="text-sm font-bold text-white">Vuoi partecipare?</div>
                  <p className="mt-2 text-sm text-blue-50">
                    Contattaci per dare una mano come volontario o per iscrivere i ragazzi alle attività.
                  </p>
                  <p className="mt-3 text-sm font-bold text-secondary">Contatti: da inserire</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <SectionTitle
                kicker="Il nostro stile"
                title="Un luogo di relazioni, tradizioni e opportunità per i giovani."
                subtitle="Dalle esperienze educative ai momenti di festa, dal supporto allo studio alle attività sportive: facciamo rete con la Parrocchia e la comunità locale."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Volontariato",
                  text: "Tante persone che mettono tempo e competenze a disposizione del paese.",
                },
                {
                  title: "Educazione",
                  text: "Attività pensate per la crescita dei ragazzi: campeggi, prescuola, percorsi comunitari.",
                },
                {
                  title: "Festa e tradizione",
                  text: "Eventi che uniscono: la Sagra è uno dei momenti più attesi dell’estate.",
                },
              ].map((c) => (
                  <div key={c.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900">
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
