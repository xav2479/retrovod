export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Series
      ============================================ */
    // Documentaries
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Tiger King',
      description: "Une exploration de l'élevage de grands félins et de son monde souterrain bizarre, peuplé de personnages excentriques.",
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox est une Américaine qui a passé près de quatre ans dans une prison italienne.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description: "Citizenfour est un film documentaire de 2014 réalisé par Laura Poitras, concernant Edward Snowden et le scandale d'espionnage de la NSA.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Super Size Me',
      description:
        "L'expérience sociale du réalisateur Morgan Spurlock dans la gastronomie de la restauration rapide le voit tenter de se nourrir uniquement de la nourriture du McDonalds",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Man on Wire',
      description:
        "Le cinéaste James Marsh recrée magistralement la cascade de 1974 du casse-cou haut de gamme Philippe Petit marchant sur un fil à travers les tours jumelles.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
    });
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Office',
      description:
        "Un groupe hétéroclite d'employés de bureau traverse des mésaventures hilarantes à Scranton, en Pennsylvanie, succursale de la Dunder Mifflin Paper Company.",
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arrested Development',
      description:
        "La famille Bluth, autrefois un nom important dans l'entreprise, perd tout après que le patriarche en chef a été condamné pour fraude.",
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Curb Your Enthusiasm',
      description:
        "Larry David, un célèbre écrivain et producteur de télévision, se livre à diverses mésaventures avec ses amis et collègues célèbres à Los Angeles.",
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Family Guy',
      description:
        "Peter Griffin et sa famille de deux adolescents, un chien intelligent, un bébé diabolique et sa femme se retrouvent dans certains des scénarios les plus hilarants.",
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Quatre jeunes garçons scolarisés, Stan Marsh, Kyle Broflovski, Eric Cartman et Kenny McCormick, qui vivent à South Park se sont lancés dans diverses aventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
    });
  
    // Children
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Peppa Pig',
      description:
        "Peppa, un cochon d'âge préscolaire extraverti, participe à de nombreuses activités énergétiques. Elle apprend quelque chose de nouveau chaque jour et s'amuse beaucoup avec sa famille et ses amis.",
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Dora The Explorer',
      description:
        "Dora, une fillette de sept ans d'origine latino-américaine, se lance dans de nombreuses aventures dans la nature avec son amie Boots, un singe et une variété d'outils amusants et utiles.",
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'PAW Patrol',
      description:
        "Six chiots courageux, dirigés par un garçon de dix ans averti en technologie, Ryder, travaillent ensemble pour accomplir des missions de sauvetage à enjeux élevés afin de protéger les résidents de la communauté d'Adventure Bay.",
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arthur',
      description:
        "Aardvark à lunettes Arthur Read montre aux enfants comment gérer les traumatismes et les défis de l'enfance tels que les devoirs, les enseignants et les intimidateurs.",
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'SpongeBob',
      description:
        "Une éponge de mer jaune nommée SpongeBob SquarePants vit dans la ville de Bikini Bottom au fond de l'océan Pacifique.",
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
    });
  
    // Crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Making a Murderer',
      description:
        "Exonéré après avoir passé près de deux décennies en prison pour un crime qu'il n'a pas commis, Steven Avery a intenté une action contre le comté de Manitowoc, au Wisconsin, et plusieurs personnes impliquées dans son arrestation.",
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Long Shot',
      description:
        "Un homme innocent est accusé de meurtre, menant son avocat dans une course folle pour confirmer son alibi en utilisant des images brutes d'une émission de télévision.",
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        "Henry Lee Lucas était un tueur en série reconnu coupable américain dont les crimes s'étalaient de 1960 à 1983. Il a été reconnu coupable du meurtre de onze personnes et condamné à mort pour le meurtre de Debra Jackson, bien que sa peine soit commuée en prison à vie en 1998.",
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Innocent Man',
      description:
        "Henry Lee Lucas était un Américain condamné tueur en série dont les crimes fractionnés de 1960 à 1983. Il a été reconnu coupable du meurtre de onze personnes et condamné à mort pour l'assassiner de Debra Jackson.",
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Staircase',
      description:
        "En 2001, la femme du romancier Michael Peterson est décédée et il a affirmé qu'elle avait péri après être tombée dans les escaliers de leur maison. Le médecin légiste, cependant, a déterminé qu'elle avait été battue avec une arme",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    });
  
    // Feel-good
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Good Will Hunting',
      description:
        "Will Hunting, un génie des mathématiques, résout tous les problèmes mathématiques difficiles. Lorsqu'il fait face à une crise émotionnelle, il prend l'aide du psychiatre Dr Sean Maguireto, qui l'aide à se rétablir.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Forrest Gump',
      description:
        "Forrest Gump, un homme avec un faible QI, rejoint l'armée pour le service où il rencontre Dan et Bubba. Cependant, il ne peut pas arrêter de penser à sa petite amie d'enfance Jenny Curran, dont la vie est foirée.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Juno',
      description:
        "Inadaptée sociale, Juno se protège avec un esprit caustique, mais sa grossesse non planifiée incite l'adolescente à s'impliquer davantage dans la vie des parents adoptifs de son bébé qu'elle ne le pensait.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Midnight In Paris',
      description:
        "Gil arrive avec sa fiancée et sa famille à Paris pour des vacances, alors même qu'il tente de terminer son premier roman. Il est séduit par la ville, qui l'emmène dans un temps passé, loin de sa fiancée.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'School of Rock',
      description:
        "Dewey Finn, un amateur de rock amateur, prend sournoisement le poste d'enseignant suppléant de son ami. N'ayant aucune qualification pour cela, il commence à former les étudiants à former un groupe.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    });
  
    /* Films
      ============================================ */
    // Drama
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Prestige',
      description:
        "Deux amis et collègues magiciens deviennent des ennemis acharnés après une tragédie soudaine. Au fur et à mesure qu'ils se consacrent à cette rivalité, ils font des sacrifices qui leur apportent la renommée mais avec des conséquences terribles.",
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Fight Club',
      description:
        "Mécontent de son style de vie capitaliste, un insomniaque à col blanc forme un club de combat clandestin avec Tyler, un vendeur de savon imprudent. Le projet se transforme bientôt en quelque chose de sinistre.",
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Kings Speech',
      description:
        "Le roi George VI tente de surmonter son problème de bégaiement avec l'aide de l'orthophoniste Lionel Logue et se rend assez digne pour mener son pays pendant la Seconde Guerre mondiale.",
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Revenant',
      description:
        "Hugh Glass, un pionnier légendaire, est gravement blessé lors d'une attaque d'ours et est abandonné par son équipe de chasse. Il utilise ses compétences pour survivre et se venger de son compagnon, qui l'a trahi.",
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Social Network',
      description:
        "Mark Zuckerberg crée un site de réseau social, Facebook, avec l'aide de son ami Eduardo Saverin. Mais bientôt, une série de mensonges déchire leur relation alors même que Facebook connecte les gens.",
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
    });
  
    // Suspense
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Shutter Island',
      description:
        "Teddy Daniels et Chuck Aule, deux maréchaux américains, sont envoyés dans un asile sur une île isolée afin d'enquêter sur la disparition d'un patient, où Teddy découvre une vérité choquante sur l'endroit.",
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Gone Girl',
      description:
        "Nick Dunne découvre que toute l'attention médiatique s'est déplacée sur lui lorsque sa femme Amy Dunne disparaît le jour de leur cinquième anniversaire de mariage.",
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Prisoners',
      description:
        "Lorsque la police prend le temps de trouver la fille de Keller Dover et son amie, il décide de faire une fouille lui-même. Son désespoir le rapproche de la découverte de la vérité et met également sa propre vie en danger.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Seven',
      description:
        "Un tueur en série commence à assassiner des gens selon les sept péchés capitaux. Deux détectives, l'un nouveau dans la ville et l'autre sur le point de prendre sa retraite, sont chargés d'appréhender le criminel.",
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Zodiac',
      description:
        "Robert Graysmith, dessinateur de profession, se retrouve à penser de façon obsessionnelle au tueur de Zodiac. Il utilise ses capacités de résolution d'énigmes pour se rapprocher de la révélation de l'identité du tueur.",
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
    });
  
    // Children
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Hotel Transylvania',
      description:
        "Dracula, qui possède un complexe haut de gamme pour les monstres, tente d'empêcher sa fille de tomber amoureuse de Jonathan, un humain.",
      genre: 'children',
      maturity: '0',
      slug: 'hotel-transylvania',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Despicable Me',
      description:
        "Gru, un cerveau criminel, adopte trois orphelins comme pions pour effectuer le plus grand braquage de l'histoire. Sa vie prend une tournure inattendue lorsque les petites filles le voient comme leur père potentiel.",
      genre: 'children',
      maturity: '0',
      slug: 'despicable-me',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Frozen',
      description:
        "Anna entreprend un voyage avec un homme des glaces, Kristoff, et son renne, Sven, afin de retrouver sa sœur, Elsa, qui a le pouvoir de convertir n'importe quel objet ou personne en glace.",
      genre: 'children',
      maturity: '0',
      slug: 'frozen',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Spirited Away',
      description:
        "Dans ce long métrage d'animation du célèbre réalisateur japonais Hayao Miyazaki, Chihiro (Rumi Hiiragi), 10 ans, et ses parents (Takashi Naitô, Yasuko Sawaguchi) tombent sur un parc d'attractions apparemment abandonné.",
      genre: 'children',
      maturity: '0',
      slug: 'spirited-away',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Up',
      description:
        "Carl, un vieux veuf, part à l'aventure dans sa maison volante à la recherche de Paradise Falls, la destination de rêve de sa femme.",
      genre: 'children',
      maturity: '0',
      slug: 'up',
    });
  
    // Thriller
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Joker',
      description:
        "À jamais seul dans une foule, l'humoriste raté Arthur Fleck cherche une connexion alors qu'il arpente les rues de Gotham City.",
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Quiet Place',
      description:
        "La famille Abbott doit maintenant affronter les terreurs du monde extérieur alors qu'elle se bat pour survivre en silence. Contraints de s'aventurer dans l'inconnu, ils se rendent compte que les créatures qui chassent par le son ne sont pas les seules menaces qui se cachent au-delà du chemin de sable.",
      genre: 'thriller',
      maturity: '15',
      slug: 'a-quiet-place',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Black Swan',
      description:
        "Nina, une ballerine, a la chance de jouer le cygne blanc, la princesse Odette. Mais elle se retrouve à sombrer dans la folie lorsque Thomas, le directeur artistique, décide que Lily pourrait mieux correspondre au rôle.",
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Nightcrawler',
      description:
        "Louis Bloom, un petit voleur, se rend compte qu'il peut gagner de l'argent en capturant des photos d'activités criminelles et commence à recourir à des tactiques extrêmes pour les obtenir.",
      genre: 'thriller',
      maturity: '15',
      slug: 'nightcrawler',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Silence of The Lambs',
      description:
        "Clarice Starling, un agent du FBI, demande l'aide d'Hannibal Lecter, un tueur en série psychopathe et ancien psychiatre, afin d'appréhender un autre tueur en série qui a fait des victimes féminines.",
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-lambs',
    });
  
    // Romance
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Star Is Born',
      description:
        "Après être tombé amoureux de l'artiste en difficulté Ally, Jackson, un musicien, la persuade de suivre ses rêves, alors qu'il se bat contre l'alcoolisme et ses démons personnels.",
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-is-born',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Blue Valentine',
      description:
        "Dean et Cynthia sont mariés et ont une fille et leur mariage est sur le point de s'effondrer. Tous deux viennent de familles dysfonctionnelles et ont du mal à donner un sens à leur relation.",
      genre: 'romance',
      maturity: '15',
      slug: 'blue-valentine',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'La La Land',
      description:
        "Sebastian (Ryan Gosling) et Mia (Emma Stone) sont unis par leur désir commun de faire ce qu'ils aiment. Mais à mesure que le succès monte, ils sont confrontés à des décisions qui commencent ...",
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Notebook',
      description:
        "Duke lit l'histoire d'Allie et Noah, deux amants séparés par le destin, à Mme Hamilton, une vieille femme atteinte de la maladie d'Alzheimer, au quotidien à partir de son cahier.",
      genre: 'romance',
      maturity: '15',
      slug: 'the-notebook',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Titanic',
      description:
        "Rose, 17 ans, est issue d'une famille aristocratique et est sur le point de se marier. Lorsqu'elle monte à bord du Titanic, elle rencontre Jack Dawson, un artiste, et tombe amoureuse de lui.",
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    });
  }