const planets = [
    {
        id: 1,
        name: "Tatooine",
        img: "./assets/images/planets/01-Tatooine.jpg",
        desc: "La plus célèbre des planètes de la bordure extérieure ! Visitez la mer de dunes, le spatioport de Mos Eisley et sa célèbre cantina, mais surtout n’oubliez pas votre crème solaire !",
        weather: "./assets/images/sun.png",
        visit: "Juillet/Août à éviter"
    },
    {
        id: 2,
        name: "Alderaan",
        img: "./assets/images/planets/02-Alderaan.jpg",
        desc: "La planète d’origine de la célèbre famille Organa ! Une planète où la douceur de vivre est une réalité, entre plaines verdoyantes, montagnes immaculées, et cités modernes où il fait bon vivre !",
        weather: "./assets/images/sun.png",
        visit: "Avril à Juillet"
    },
    {
        id: 3,
        name: "Yavin 4",
        img: "./assets/images/planets/03-Yavin4.jpg",
        desc: "Une planète mystérieuse où les forêts brumeuses cohabitent avec d’anciennes ruines. Ne soyez pas surpris si vous croisez les vestiges d’une ancienne base rebelle abandonnée !",
        weather: "./assets/images/cloud.png",
        visit: "Mai / Juin"
    },
    {
        id: 4,
        name: "Hoth",
        img: "./assets/images/planets/04-Hoth.jpg",
        desc: "La planète la plus froide de la galaxie ! Préparer votre doudoune la plus chaude, car plaines gelées et grottes humides vous attendent ! C’est parti pour une aventure trépidante !",
        weather: "./assets/images/snow.png",
        visit: "Eté (seulement -30°C !)"
    },
    {
        id: 5,
        name: "Dagobah",
        img: "./assets/images/planets/05-Dagobah.jpg",
        desc: "Une planète humide et marécageuse, qui mettra votre sens de la survie à l’épreuve ! N’oubliez pas d’aller visiter la hutte du célèbre maitre Jedi Yoda, et de goûter à son fameux ragout de racines !",
        weather: "./assets/images/rain.png",
        visit: "Septembre à Novembre"
    },
    {
        id: 6,
        name: "Bespin",
        img: "./assets/images/planets/06-Bespin.jpg",
        desc: "Une planète gazeuse où les habitants vivent dans des villes suspendues, comme la célèbre Cité des Nuages, ville moderne et industrielle, qui a su prospérer grâce à l’exploitation du gaz naturel !",
        weather: "./assets/images/sun.png",
        visit: "Toute l'année"
    },
    {
        id: 7,
        name: "Endor",
        img: "./assets/images/planets/07-Endor.jpg",
        desc: "Une lune forestière où les arbres atteignent le ciel, mais également la planète natale des mignons Ewok ! Attention à ne pas les énerver, et ils vous inviteront peut-être à une de leurs petites fêtes !",
        weather: "./assets/images/sun.png",
        visit: "Février à Mai"
    },
    {
        id: 8,
        name: "Naboo",
        img: "./assets/images/planets/08-Naboo.jpg",
        desc: "L’une des perles de la bordure médiane ! Plaines verdoyantes, lacs d’un bleu turquoise, villes à l’architecture raffinée : tout sur cette planète respire la douceur de vivre et la sérénité !",
        weather: "./assets/images/sun.png",
        visit: "Toute l'année (mais particulièrement au printemps)"
    },
    {
        id: 9,
        name: "Coruscant",
        img: "./assets/images/planets/09-Coruscant.jpg",
        desc: "La capitale de la galaxie ! Coruscant est une cité planète, recouverte à 100% par des zones urbaines ! Culture, vie nocturne, politique, institutions Jedi : Coruscant est assurément la planète de tous les possibles !",
        weather: "./assets/images/cloud.png",
        visit: "Toute l'année"
    },
    {
        id: 10,
        name: "Kamino",
        img: "./assets/images/planets/10-Kamino.jpg",
        desc: "Planète aquatique habitée par un peuple de scientifiques, n’hésitez pas à aller visiter leur célèbre complexe de clonage ! N’oubliez pas votre parapluie, le risque de pluie est de 100% toute l’année !",
        weather: "./assets/images/rain.png",
        visit: "Toute l'année (il pleut tout le temps de toute façon)"
    },
    {
        id: 11,
        name: "Geonosis",
        img: "./assets/images/planets/11-Geonosis.jpg",
        desc: "Une planète aride et désertique connue à travers la galaxie pour avoir accueilli la première bataille de la Guerre des Clones ! Une plongée dans l’histoire de la République, sous une chaleur de plomb !",
        weather: "./assets/images/cloud.png",
        visit: "Novembre à Mars"
    },
    {
        id: 12,
        name: "Utapau",
        img: "./assets/images/planets/12-Utapau.jpg",
        desc: "Une planète aux plaines arides, où les habitants vivent à l’abri dans des cités troglodytes. Une destination de choix pour les amateurs de géologie et de spéléologie !",
        weather: "./assets/images/cloud.png",
        visit: "Avril à Septembre"
    },
    {
        id: 13,
        name: "Mustafar",
        img: "./assets/images/planets/13-Mustafar.jpg",
        desc: "Une planète volcanique, recouverte de rivières de lave et d’installations industrielles ! Si vous détestez le froid, cette planète est très probablement faite pour vous !",
        weather: "./assets/images/cloud.png",
        visit: "Hiver à privilégier !"
    },
    {
        id: 14,
        name: "Kashyyyk",
        img: "./assets/images/planets/14-Kashyyyk.jpg",
        desc: "La planète natale des Wookies (vous connaissez Chewbacca ?), où les étendues d’eau infinies côtoient les forêts denses aux arbres ancestraux et majestueux !",
        weather: "./assets/images/sun.png",
        visit: "A l'automne de préférence"
    },
    {
        id: 15,
        name: "Polis Massa",
        img: "./assets/images/planets/15-PolisMassa.jpg",
        desc: "Astéroïde perdu au milieu de la bordure extérieure, connu pour son centre médical, qui a vu naitre le plus célèbre héros de la galaxie ! Si vous aimez la tranquillité, c’est une destination de choix !",
        weather: "./assets/images/sun.png",
        visit: "N'importe quand (vous sortirez rarement dehors)"
    },
    {
        id: 16,
        name: "Mygeeto",
        img: "./assets/images/planets/16-Mygeeto.jpg",
        desc: "Une planète urbaine et glacée, fleuron de l’industrie métallurgique de la galaxie ! A visiter si vous avez l’âme d’un aventurier, la planète ne faisant pas du tourisme galactique sa priorité numéro un !",
        weather: "./assets/images/snow.png",
        visit: "Mars à Octobre"
    },
    {
        id: 17,
        name: "Felucia",
        img: "./assets/images/planets/17-Felucia.jpg",
        desc: "Une planète luxuriante composée de jungles inextricables à la végétation dense ! Mais attention à vous, plantes carnivores et bêtes féroces vous attendent au milieu de toutes ces merveilles naturelles !",
        weather: "./assets/images/cloud.png",
        visit: "Evitez la saison des pluies !"
    },
    {
        id: 18,
        name: "Cato Neimoidia",
        img: "./assets/images/planets/18-CatoNeimoidia.jpg",
        desc: "L’attrait principal de cette planète réside dans les immenses cités suspendues tels des hamacs entre les pics rocheux vertigineux ! A visiter pour son architecture, mais aussi pour ses casinos !",
        weather: "./assets/images/sun.png",
        visit: "Août / Septembre"
    },
    {
        id: 20,
        name: "Stewjon",
        img: "./assets/images/planets/20-Stewjon.jpg",
        desc: "On se ne sait pas grand-chose à propos de cette planète, si ce n’est qu’elle a vu naitre le plus grand Jedi de l’histoire de la galaxie, Obi-Wan Kenobi ! Vous l’aurez compris : à visiter impérativement !",
        weather: "./assets/images/sun.png",
        visit: "Dès que possible !"
    },
    {
        id: 22,
        name: "Corellia",
        img: "./assets/images/planets/22-Corellia.jpg",
        desc: "Une planète connue pour son expertise dans la construction de vaisseaux ! La plupart des vaisseaux de la galaxie sortent de ses extraordinaires chantiers navals ! A visiter pour du tourisme industriel !",
        weather: "./assets/images/rain.png",
        visit: "Evitez les vacances scolaires !"
    },
    {
        id: 23,
        name: "Rodia",
        img: "./assets/images/planets/23-Rodia.jpg",
        desc: "Une planète marécageuse et hostile, où les habitants vivent à l’abri dans des immenses dômes de verre ! A visiter pour profiter en sécurité des merveilles de sa nature luxuriante !",
        weather: "./assets/images/cloud.png",
        visit: "Septembre à Décembre"
    },
    {
        id: 24,
        name: "Nal Hutta",
        img: "./assets/images/planets/24-NalHutta.jpg",
        desc: "Une planète qui sert de quartier général au puissant cartel de Hutts ! Si une plongée au cœur de la pègre galactique ne vous fait pas peur, allez leur rendre une petite visite de courtoisie !",
        weather: "./assets/images/cloud.png",
        visit: "Toute l'année sauf l'été"
    },
    {
        id: 27,
        name: "Ord Mantell",
        img: "./assets/images/planets/27-OrdMantell.jpg",
        desc: "Une planète aux vastes plaines arides, au sein desquelles de grandes cités ont su prospérer, notamment grâce au commerce ! Peu importe ce que vous cherchez, vous le trouverez ici !",
        weather: "./assets/images/sun.png",
        visit: "Avril à Juin"
    },
    {
        id: 31,
        name: "Mon Cala",
        img: "./assets/images/planets/31-MonCala.jpg",
        desc: "Préparez-vous à un dépaysement absolu ! Habitée par un peuple d’amphibiens, tout sur cette planète se passe sous l’eau, au sein de somptueuses villes sous-marines ! Pensez à votre combinaison de plongée !",
        weather: "./assets/images/rain.png",
        visit: "Décembre à Février"
    },
    {
        id: 33,
        name: "Sullust",
        img: "./assets/images/planets/33-Sullust.jpg",
        desc: "Cette planète volcanique concentre certaines des plus grandes industries militaires de la galaxie ! N’oubliez pas votre visa, l’accès aux installations est très réglementé !",
        weather: "./assets/images/sun.png",
        visit: "Octobre à Mars"
    },
    {
        id: 36,
        name: "Dathomir",
        img: "./assets/images/planets/36-Dathomir.jpg",
        desc: "La planète natale des sœurs de la nuit, une ancienne caste de sorcières aux pouvoirs sinistres et mystérieux ! Si vous aimez le frisson et les histoires qui font peur, alors foncez !",
        weather: "./assets/images/cloud.png",
        visit: "A l'automne"
    },
    {
        id: 37,
        name: "Ryloth",
        img: "./assets/images/planets/37-Ryloth.jpg",
        desc: "Une planète aride et désertique habitée par les célèbres Twi’lek ! Ces derniers vivent au sein d’immenses cités construites à flanc de canyons ! A visiter impérativement !",
        weather: "./assets/images/sun.png",
        visit: "Janvier à Mars"
    },
    {
        id: 53,
        name: "Concord Dawn",
        img: "./assets/images/planets/53-ConcordDawn.jpg",
        desc: "Cette planète a accueilli les célèbres guerriers Mandaloriens, après leur exil forcé de leur planète natale Mandalore ! Les archéologues en herbe y découvriront des richesses historiques et ethnologiques !",
        weather: "./assets/images/cloud.png",
        visit: "Juillet / Août"
    }
]

export default planets;
