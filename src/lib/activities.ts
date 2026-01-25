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
    slug: "volley",
    title: "Attività sportiva (Volley)",
    tag: "Sport",
    description:
        "Squadre e allenamenti nella palestra di Vezzano, con partecipazione ai campionati CSI.",
    highlights: ["Settore giovanile e squadre Open", "Allenamenti regolari", "Campionati CSI"],
  },
  {
    slug: "prescuola",
    title: "Prescuola",
    tag: "Scuola • Supporto",
    description:
        "Percorso di studio e gioco nelle settimane prima dell’inizio dell’anno scolastico, con volontari e animatori.",
    highlights: ["Compiti delle vacanze", "Momenti di gioco", "Supporto di volontari"],
  },
];
