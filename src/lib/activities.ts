export type Activity = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
};

export const mainActivities: Activity[] = [
  {
    slug: "campeggi-vaglie",
    title: "Campeggi estivi (e invernali) a Vaglie",
    tag: "Educazione • Comunità",
    description:
        "In collaborazione con la Parrocchia e l’Unità Pastorale, il Circolo sostiene i campeggi a Vaglie: un’esperienza di crescita, amicizia e vita insieme.",
    highlights: [
      "Struttura di Vaglie ristrutturata e certificata (interventi 2005–2010)",
      "Campeggi estivi e invernali per ragazzi e giovani",
      "Giornate tra natura, attività educative e momenti comunitari",
    ],
  },
  {
    slug: "sagra-madonna-della-neve",
    title: "Sagra della Madonna della Neve",
    tag: "Festa • Tradizione • Volontariato",
    description:
        "Appuntamento storico dell’estate vezzanese: cucina, musica, tornei e iniziative per tutte le età, grazie al lavoro di tanti volontari.",
    highlights: [
      "Si svolge tradizionalmente a inizio agosto negli spazi adiacenti la parrocchia",
      "Ristorante con menù della tradizione e birreria",
      "Tornei e attività: calcetto saponato, volley e altre proposte",
    ],
  },
];

export const otherActivities: Activity[] = [
  {
    slug: "sport",
    title: "Attività Sportive",
    tag: "Sport",
    description:
        "Calcetto, pallavolo (Volley CSI), basket e tornei per tutte le età. Lo sport come strumento di crescita e socializzazione.",
    highlights: ["Calcetto e Basket", "Volley (squadre giovanili e Open)", "Tornei stagionali"],
  },
  {
    slug: "prescuola",
    title: "Prescuola e Supporto Studio",
    tag: "Scuola • Supporto",
    description:
        "Supporto allo studio e aiuto compiti per bambini e ragazzi, in un ambiente sereno e stimolante.",
    highlights: ["Compiti delle vacanze", "Momenti di gioco", "Supporto di volontari"],
  },
  {
    slug: "animazione",
    title: "Animazione e Socialità",
    tag: "Festa • Eventi",
    description:
        "Feste, gite (Parco Avventura), campi estivi e attività ricreative per vivere momenti indimenticabili insieme.",
    highlights: ["Festa di Carnevale", "Gite comunitarie", "Eventi per famiglie"],
  },
  {
    slug: "formazione",
    title: "Formazione e Spiritualità",
    tag: "Valori",
    description:
        "Catechesi, momenti di preghiera e incontri formativi per crescere nella fede e nei valori cristiani.",
    highlights: ["Incontri formativi", "Momenti di preghiera", "Percorsi di fede"],
  },
];
