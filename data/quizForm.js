// je fais un tableau d'objet pour contenir les questions du quiz en objet.
// je fais un nouveau tableau dans ce même tableau pour contenir les réponses en objet.
// il y aura le numéro de la question, la question, les réponses avec une image par réponse.
const quizForm = [
  {
    questionText: "Pour vous vacances rime avec ?",
    answerOptions: [
      {
        answerText: "Farniente",
        img: "./assets/images/quizPic/1-farniente.jpeg",
      },
      {
        answerText: "Aventure",
        img: "./assets/images/quizPic/1-aventure.jpeg",
      },
    ],
  },
  {
    questionText: "Vous êtes un ?",
    answerOptions: [
      {
        answerText: "Citadin dans l’âme",
        img: "./assets/images/quizPic/2-citadin.jpeg",
      },
      {
        answerText: "Nature nature nature",
        img: "./assets/images/quizPic/2-nature.jpeg",
      },
    ],
  },
  {
    questionText: "Pour vos sorties, que préférez-vous ?",
    answerOptions: [
      { answerText: "Plage", img: "./assets/images/quizPic/3-plage.jpg" },
      { answerText: "Musée", img: "./assets/images/quizPic/3-musee.jpeg" },
    ],
  },
  {
    questionText: "On vous dit Soleil vous répondez ?",
    answerOptions: [
      {
        answerText: "Oui j'adore",
        img: "./assets/images/quizPic/4-soleil.jpeg",
      },
      {
        answerText: "Quelle horreur",
        img: "./assets/images/quizPic/4-horreur.jpeg",
      },
    ],
  },
  {
    questionText: "Choisissez la fréquentation idéale ?",
    answerOptions: [
      {
        answerText: "Voir beaucoup de monde",
        img: "./assets/images/quizPic/5-peuple.png",
      },
      {
        answerText: "Les lieux les plus intimes",
        img: "./assets/images/quizPic/5-intime.jpeg",
      },
    ],
  },
  {
    questionText: "Quel confort souhaitez vous pour dormir ?",
    answerOptions: [
      {
        answerText: "Une hutte",
        img: "./assets/images/quizPic/6-hutte.jpeg",
      },
      {
        answerText: "Un hotel de luxe",
        img: "./assets/images/quizPic/6-hotel.jpeg",
      },
    ],
  },
  {
    questionText: "Quel formateur est le meilleur ?",
    answerOptions: [
      {
        answerText: "Jimmmmmyy Hiiiilp",
        img: "./assets/images/quizPic/7-jimmy.png",
      },
      {
        answerText: "Lydiiiiiiie On va moouriiir",
        img: "./assets/images/quizPic/7-lydie.png",
      },
    ],
  },
];
export default quizForm;
