// je fais un tableau d'objet pour contenir les questions du quiz en objet.
// je fais un nouveau tableau dans ce même tableau pour contenir les réponses en objet.
// il y aura le numéro de la question, la question, les réponses avec une image par réponse.
const quizForm = [
  {
    questionText: "Pour vous vacances rime avec ?",
    answerOptions: [
      {
        answerText: "Farniente",
        isCorrect: 1,
        img: "./assets/images/quizPic/1-farniente.jpeg",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Aventure",
        isCorrect: 2,
        img2: "./assets/images/quizPic/1-aventure.jpeg",
      },
    ],
  },
  {
    questionText: "Dans votre quotidien, vous êtes ?",
    answerOptions: [
      {
        answerText: "Citadin dans l’âme",
        isCorrect: 10,
        img: "./assets/images/quizPic/2-citadin.jpeg",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Nature nature nature",
        isCorrect: 20,
        img2: "./assets/images/quizPic/2-nature.jpeg",
      },
    ],
  },
  {
    questionText: "Pour vos sorties, que préférez-vous ?",
    answerOptions: [
      {
        answerText: "Plage",
        isCorrect: 0,
        img: "./assets/images/quizPic/3-plage.jpg",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Musée",
        isCorrect: 0,
        img2: "./assets/images/quizPic/3-musee.jpeg",
      },
    ],
  },
  {
    questionText: "On vous dit soleil vous répondez ?",
    answerOptions: [
      {
        answerText: "Oui j'adore",
        isCorrect: 100,
        img: "./assets/images/quizPic/4-soleil.jpeg",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Quelle horreur",
        isCorrect: 200,
        img2: "./assets/images/quizPic/4-horreur.jpeg",
      },
    ],
  },
  {
    questionText: "Choisissez la fréquentation idéale ?",
    answerOptions: [
      {
        answerText: "Voir beaucoup de monde",
        isCorrect: 0,
        img: "./assets/images/quizPic/5-peuple.png",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Les lieux les plus intimes",
        isCorrect: 0,
        img2: "./assets/images/quizPic/5-intime.jpeg",
      },
    ],
  },
  {
    questionText: "Quel confort vous faut-il pour dormir ?",
    answerOptions: [
      {
        answerText: "Une hutte",
        isCorrect: 0,
        img: "./assets/images/quizPic/6-hutte.jpeg",
      },
    ],
    answerOptions2: [
      {
        answerText2: "Un hotel de luxe",
        isCorrect: 0,
        img2: "./assets/images/quizPic/6-hotel.jpeg",
      },
    ],
  },
];
export default quizForm;
